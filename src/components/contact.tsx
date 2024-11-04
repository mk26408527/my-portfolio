import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const Contact = () => {
  return (
    <section className="text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 data-aos="zoom-in-down" className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Get In Touch
        </h2>

        <div data-aos="zoom-in-down" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Email */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg bg-gray-800">
            <FaEnvelope className="text-5xl text-green-500" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-300">huzaifa200t@gmail.com</p>
            <a href="mailto:user@gmail.com" className="text-green-500 hover:underline">
              Write me &rarr;
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg bg-gray-800">
            <FaPhoneAlt className="text-5xl text-green-500" />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="text-gray-300">03-222-635439</p>
            <a href="https://wa.me/999888777" className="text-green-500 hover:underline">
              Write me &rarr;
            </a>
          </div>

          {/* Messenger */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg bg-gray-800">
            <FaMapMarkerAlt className="text-5xl text-green-500" />
            <h3 className="text-xl font-semibold">Messenger</h3>
            <p className="text-gray-300">user.fb123</p>
            <a href="https://www.messenger.com/new?initial_e2ee_toggle_position=true" className="text-green-500 hover:underline">
              Write me &rarr;
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-lg mx-auto">
          <form className="p-6 rounded-lg shadow-lg space-y-6 bg-gray-800" action="YOUR_FORM_SUBMISSION_URL" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-400">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 mt-1 bg-black border border-gray-700 rounded focus:outline-none focus:border-green-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-1 bg-black border border-gray-700 rounded focus:outline-none focus:border-green-400"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 mt-1 bg-black border border-gray-700 rounded focus:outline-none focus:border-green-400"
                placeholder="Your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 mt-1 bg-black border border-gray-700 rounded focus:outline-none focus:border-green-400"
                rows={5}
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button  className="w-full p-4 bg-green-500 rounded text-white font-bold hover:bg-green-600 transition duration-200"   type="submit"> 
              Send Message
           </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Thank You for Reaching Out!</AlertDialogTitle>
          <AlertDialogDescription>
          Your message has been successfully sent. We appreciate your feedback and will get back to you shortly.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
