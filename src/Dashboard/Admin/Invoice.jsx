


import html2pdf from 'html2pdf.js';
import logo from '../../../public/main-logo.png';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import { FaFileDownload } from "react-icons/fa";

const Invoice = () => {
  const { darkMode } = useContext(AuthContext);

  const generatePdf = () => {
    const info = JSON.parse(localStorage.getItem('invoice'));
    const { books, customer, date, mail, total_price, price, transactionId, _id } = JSON.parse(localStorage.getItem('invoice'));

    const pdfOptions = {
      margin: 10,
      filename: 'code-example.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const content = `
    <div class="invoice bg-white p-8 rounded-lg shadow-lg">
        <div> <img class="w-[200px] h-[70px]" src=${logo} >  </div>
        <div class="flex justify-between my-4">
            <div class="w-1/2">
                <p class="font-semibold">Invoice Number: ${_id}</p>
                <p class="font-semibold"> Invoice date: ${new Date()?.toISOString().split("T")[0]}</p>
            </div>
            <div class="w-1/2 text-right">
                <p>Customer Name: ${customer?.displayName}</p>
                <p>Customer Email: ${mail}</p>
                <p>Customer Phone Number: ${customer?.phoneNumber}</p>
                <p> Address: ${customer?.address}</p>
                <p>Date of Purchase: ${new Date(date)?.toISOString().split("T")[0]}</p>
                
                <p>Delivery: ${customer?.receive}</p>
                <p>Transaction: ${transactionId ? transactionId : 'cash on delivery'}</p>
            </div>
        </div>
        <div class="details mb-4">
            <table class="w-full border-collapse mt-10">
                <thead>
                    <tr>
                        <th class="border border-gray-400 px-4 py-2">Product Type</th>
                        <th class="border border-gray-400 px-4 py-2">Name</th>
                        <th class="border border-gray-400 px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${books.map((a, index) => `
                        <tr key=${index}>
                            <td class="border border-gray-400 px-4 py-2 text-center">Book</td>
                            <td class="border border-gray-400 px-4 py-2 text-center">${a?.title}</td>
                            <td class="border border-gray-400 px-4 py-2 text-center"> <span>$</span>${a?.offer_price}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>  
            
            <h2 class=" font-[500]  px-4 pt-2 text-end"> Tax = 5% </h2>
            <h2 class=" font-[500]  px-4  text-end"> Delivery Charge = $5 </h2>
            <h2 class=" font-[500]  px-4  text-end"> Total price= <span>$</span>${price || total_price}  </h2>
        </div>
    </div>
  `;

    html2pdf()
      .from(content)
      .set(pdfOptions)
      .outputPdf('bloburi')
      .then((pdfDataUri) => {
        const link = document.createElement('a');
        link.href = pdfDataUri;
        link.download = 'code-example.pdf';

        link.click();
      });
  };

  const handleButtonClick = () => {
    setTimeout(() => {
      generatePdf();
    }, 2000); // 2000 milliseconds = 3 seconds
  };

  return (
    <div className="w-75 mx-auto">
      <button
        className={
          darkMode
            ? 'btn bg-white my-2 text-black btn-xs normal-case mx-1'
            : 'btn hover:bg-red hover:text-white my-2 bg-red btn-xs normal-case text-white mx-1'
        }
        onClick={handleButtonClick}
      >
      <FaFileDownload/>
      </button>

      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Invoice;
