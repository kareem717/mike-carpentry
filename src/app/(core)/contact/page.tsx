import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8 mt-20">
      <h1>Contact</h1>
      <ContactForm />
    </div>
  )
}