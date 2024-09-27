import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import {motion} from "framer-motion"
const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })

    const [errors,setErrors]=useState({});
    const [isSending,setIsSending]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,[name]:value
        })
    }

    const validate=()=>{
        let errors={};
        if(!formData.name)errors.name="Name is Required"
        if(!formData.email){
            errors.email="Email is Required"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email="Email is Invalid"
        }
        if(!formData.message)errors.message="Message is Required"
        return errors;

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors=validate();
        if(Object.keys(validateErrors).length>0){
            setErrors(validateErrors);
        }else{
            setErrors({});
            setIsSending(true);

            emailjs.send(
                "service_9op9vqx",
                "template_1p0eiqo",
                formData,
                "zaZvczCWWgjYPtuaz"
            ).then((response)=>{
                console.log("Success",response.status,response.text);
                toast.success("Message Sent Successfully!")
                setFormData({name:"",email:"",message:""})
            }).catch((error)=>{
                console.log("Failed to send",error);
                toast.error("Failed to send message.Please try again later")
            }).finally(()=>{
                setIsSending(false);
            })
        }
    }
  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
        <Toaster/>
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect</h2>
        <motion.form
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8,delay:1}}
        onSubmit={handleSubmit}>
            <div className="mb-4">
                <input type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"/>
                {errors.name && (
                    <p className="text-sm text-pink-700">{errors.name}</p>
                )}
            </div>
            <div className="mb-4">
                <input type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"/>
                {errors.email && (
                    <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    aria-live="polite"
                    className="text-sm text-pink-700">{errors.email}</motion.p>
                )}
            </div>
            <div className="mb-4">
                <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none" rows="4"/>
                {errors.message && (
                    <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    aria-live="polite"
                    className="text-sm text-pink-700">{errors.message}</motion.p>
                )}
            </div>
            <button type="submit" className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${isSending?"cursor-not-allowed opacity-50":""}`} disabled={isSending}>{isSending?"Sending...":"Send"}</button>
        </motion.form>
    </div>
  )
}

export default Contact