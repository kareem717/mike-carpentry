import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-20">
      <h3 className="uppercase font-light text-primary">Talk to the team</h3>
      <h1>Reach out to speak with an expert!</h1>
      <div className="p-4 border rounded-md w-full">
        <ContactForm />
      </div>
    </div>
  )
}