import { useEffect } from "react";
import terms from "../../../assets/image/terms.jpg";

const TermsCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen p-5 px-10 text-slate-700">
      <div className="flex items-center py-10">
        <img src={terms} alt="" className="h-40" />
        <h2 className="text-4xl font-mono font-extrabold ps-10">
          Terms and Conditions
        </h2>
      </div>
      <div className="p-10">
        <p className="py-5">
          Welcome to Book Verse! By using our services, you agree to the
          following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-lg font-medium py-3 underline">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Book Verse website and its services, you
          acknowledge that you have read, understood, and agreed to these terms.{" "}
        </p>
        <h2 className="text-lg font-medium py-3 underline">2. User Account</h2>
        <p>
          You're responsible for maintaining the security of your account.
          Inform us immediately about any unauthorized activity. We're not
          liable for losses due to unauthorized use.{" "}
        </p>
        <h2 className="text-lg font-medium py-3 underline">3. Services</h2>
        <p>
          Book Verse provides various services, including purchasing new and old
          books, as well as accessing rewards and offers. Payment is required
          for purchases.
        </p>
        <h2 className="text-lg font-medium py-3 underline">4. Privacy</h2>
        <p>
          Your privacy is important to us. Please review and accept our Privacy
          Policy to understand how your information is used and protected.{" "}
        </p>
        <h2 className="text-lg font-medium py-3 underline">5. Limited Use</h2>
        <p>
          You agree not to misuse, copy, modify, distribute, or create
          derivative works from our content. Limited reproduction is allowed
          with proper attribution to Book Verse.
        </p>
        <h2 className="text-lg font-medium py-3 underline">6. User Conduct</h2>
        <p>
          When using our services, you agree not to publish, post, or distribute
          inappropriate, defamatory, or unlawful content. Do not upload files
          containing harmful software.
        </p>
        <h2 className="text-lg font-medium py-3 underline">7. Product Descriptions</h2>
        <p>
          We strive for accuracy in product descriptions, but errors may occur.
          If a product doesn't match the description, your remedy is to return
          it in unused condition.
        </p>
        <h2 className="text-lg font-medium py-3 underline">8. Links to Third-Party Sites</h2>
        <p>
          Our Website may include links to other websites. We're not responsible
          for the content of these external sites.
        </p>
        <h2 className="text-lg font-medium py-3 underline">9. Return and Replacement</h2>
        <p>
          If you're unsatisfied with your order, you can return or replace items
          within a specified timeframe. Please review our Return and Replacement
          Policy for details.
        </p>
        <h2 className="text-lg font-medium py-3 underline">10. Refund Policy</h2>
        <p>
          Refunds are processed for valid returns. Replacement depends on
          product availability. Refunds exclude non-refundable charges like
          shipping fees.
        </p>
        <h2 className="text-lg font-medium py-3 underline">11. Intellectual Property</h2>
        <p>
          The content on Book Verse is protected by intellectual property
          rights. You may not use, reproduce, or distribute our content without
          authorization.
        </p>
        <h2 className="text-lg font-medium py-3 underline">12. Disclaimer of Warranties</h2>
        <p>
          While we strive for accuracy, Book Verse does not warrant the accuracy
          or completeness of the information on our Website. We're not liable
          for damages resulting from your use of our services.
        </p>
        <h2 className="text-lg font-medium py-3 underline">13. Payment and Shipping</h2>
        <p>
          We offer various payment methods and will arrange shipment of products
          to you. Shipping schedules are estimates and may vary due to
          unforeseen circumstances.
        </p>
        <h2 className="text-lg font-medium py-3 underline">14. Promo Code Conditions</h2>
        <p>
          Promo codes may provide discounts on book purchases. Specific
          conditions apply, including validity and applicable categories.{" "}
        </p>
        <h2 className="text-lg font-medium py-3 underline">15. Risk of Loss</h2>
        <p>
          The risk of loss for products passes to you upon delivery. We're not
          liable for damage post-delivery
        </p>
        <h2 className="text-lg font-medium py-3 underline">16. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your use of our services
          if you violate these terms.
        </p>
        <h2 className="text-lg font-medium py-3 underline">17. Term and Policy</h2>
        <p>
          Updates We may update these terms and policies. Changes are effective
          immediately upon posting on the Website. Thank you for using Book
          Verse! If you have any questions, feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
