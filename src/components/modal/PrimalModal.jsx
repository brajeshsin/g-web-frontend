// import React, { useState } from "react";
// import { X, Loader2 } from "lucide-react";
// import toast from "react-hot-toast";
// import { apiService } from "../../services/api";

// const BrajeshModal = ({ open, onClose }) => {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     session: "Strength",
//   });

//   if (!open) return null;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (loading) return; // prevent multiple submit

//     setLoading(true);

//     try {
//       const response = await apiService.post("/reserve", formData);

//       console.log("API Response:", response);

//       toast.success("Reservation Submitted successfully!", {
//         style: {
//           padding: "16px",
//           background: "#7f8df9",
//           color: "black",
//         },
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         session: "Strength",
//       });

//       onClose();
//     } catch (error) {
//       console.error("API Error:", error);

//       toast.error(error.message || "Submission failed!", {
//         style: {
//           padding: "16px",
//         },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
//       {/* Modal Box */}
//       <div className="bg-[#e9ecfe] w-full max-w-lg rounded-xl shadow-xl relative overflow-hidden">
//         {/* Header */}
//         <div className="bg-[#7f8df9] p-6 text-center">
//           <h2 className="font-AnekTamil text-3xl font-bold uppercase text-black">
//             Reserve Session
//           </h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="px-8 py-6">
//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             disabled={loading}
//             className="w-full p-3 rounded-md border border-black bg-transparent mb-4 outline-none disabled:opacity-60"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             disabled={loading}
//             className="w-full p-3 rounded-md border border-black bg-transparent mb-4 outline-none disabled:opacity-60"
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             disabled={loading}
//             className="w-full p-3 rounded-md border border-black bg-transparent mb-4 outline-none disabled:opacity-60"
//           />

//           {/* Session Select */}
//           <select
//             name="session"
//             value={formData.session}
//             onChange={handleChange}
//             disabled={loading}
//             className="w-full p-3 rounded-md border border-black bg-transparent mb-6 outline-none disabled:opacity-60"
//           >
//             <option>Strength</option>
//             <option>Conditioning</option>
//             <option>Community Classes</option>
//           </select>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#7f8df9] text-black py-3 rounded-lg uppercase font-bold flex items-center cursor-pointer justify-center gap-2 hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin" size={20} />
//                 Submitting...
//               </>
//             ) : (
//               "Reserve Your Spot"
//             )}
//           </button>
//         </form>

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           disabled={loading}
//           className="absolute top-3 right-4 text-black text-2xl font-bold cursor-pointer disabled:opacity-50"
//         >
//           <X />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BrajeshModal;
import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { apiService } from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema } from "../../validations/reservationSchema";

const BrajeshModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      session: "Strength",
    },
  });

  if (!open) return null;

  // ✅ Correct submit handler
  const onSubmit = async (data) => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await apiService.post("/reserve", data);

      console.log("API Response:", response);

      toast.success("Reservation Submitted successfully!", {
        style: {
          padding: "16px",
          background: "#7f8df9",
          color: "black",
        },
      });

      reset(); // ✅ reset form
      onClose();
    } catch (error) {
      console.error("API Error:", error);

      toast.error(error?.response?.data?.message || "Submission failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#e9ecfe] w-full max-w-lg rounded-xl shadow-xl relative overflow-hidden">
        {/* Header */}
        <div className="bg-[#7f8df9] p-6 text-center">
          <h2 className="font-AnekTamil text-3xl font-bold uppercase text-black">
            Reserve Session
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6 space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name")}
              disabled={loading}
              className="w-full p-3 rounded-md border border-black bg-transparent outline-none disabled:opacity-60"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              disabled={loading}
              className="w-full p-3 rounded-md border border-black bg-transparent outline-none disabled:opacity-60"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              disabled={loading}
              className="w-full p-3 rounded-md border border-black bg-transparent outline-none disabled:opacity-60"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Session */}
          <div>
            <select
              {...register("session")}
              disabled={loading}
              className="w-full p-3 rounded-md border border-black bg-transparent outline-none disabled:opacity-60"
            >
              <option value="Strength">Strength</option>
              <option value="Conditioning">Conditioning</option>
              <option value="Community Classes">Community Classes</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#7f8df9] text-black py-3 rounded-lg uppercase font-bold flex items-center cursor-pointer justify-center gap-2 hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Submitting...
              </>
            ) : (
              "Reserve Your Spot"
            )}
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-3 right-4 text-black text-2xl font-bold cursor-pointer disabled:opacity-50"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default BrajeshModal;
