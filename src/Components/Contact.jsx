import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect, useRef  } from 'react'
import {  toast } from 'react-toastify';
import {motion} from 'framer-motion';
React
motion
const Contact = () => {
 
  const [state, handleSubmit] = useForm('xkgzrvwy');
    const formRef = useRef(null);

  // Reset form when succeeded
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
       toast.success('Message sent successfully!');
    } 
    
  }, [state.succeeded]);
 

  return (
    <motion.div 
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}  className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Connect <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>i would love to hear from you! if you have any questions lets work together.</p>

        <form className='max-w-2xl mx-auto text-gray-600 pt-8 relative' onSubmit={handleSubmit} ref={formRef}> 
          <div className='flex flex-wrap '>
            <div className='w-full md:w-1/2 text-left'>
              Your Name
               <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
               <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              Your Email
               <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
               <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            </div>
          </div>
          <div className='text-left my-6'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name='Message' placeholder='Message' rows="5" required></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded' disabled={state.submitting}> {state.submitting ? 'Sending...' : 'Send Message'}</button>
          
        </form>
    </motion.div>
  )
}

export default Contact;
