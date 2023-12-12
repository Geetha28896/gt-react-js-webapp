// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   const [relocate, setRelocate] = useState(null);

//   const handleCheckboxChange = (value) => {
//     setRelocate(value === "yes" ? "yes" : "no");
//   };

//   const {formData, setFormData}=useState({
//     username:'',
//     email:'',
//     occupation:'',
//     gender:'',
//     languages:'',
//     relocate 

//   })

//   return (
//     <div className="App">
//       <h1>Candidate Form</h1>
//       <form>
//         <div className="form-group">
//           <label htmlFor="username" className="form-label">
//             User Name
//           </label>
//           <input className="form-control" name="username" type="text" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email" className="form-label" type="text">
//             Email
//           </label>
//           <input className="form-control" name="email" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="occupation" className="form-label">
//             Occupation
//           </label>
//           <select className="form-select" name="occupation">
//             <option value="student">Student</option>
//             <option value="employee">Employee</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">
//             Gender
//           </label>
//           <div>
//             <div>
//               <input type="radio" name="gender" value="male" />
//               <label htmlFor="male">Male</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="female" />
//               <label htmlFor="female">Female</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="other" />
//               <label htmlFor="other">Other</label>
//             </div>
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">
//             Languages
//           </label>
//           <div>
//             <div>
//               <input type="checkbox" name="languages" value="html" />
//               <label htmlFor="html">HTML</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="css" />
//               <label htmlFor="css">CSS</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="javascript" />
//               <label htmlFor="javascript">Javascript</label>
//             </div>
//           </div>
//           <br />

//           <div className="form-group" >
//           <label htmlFor="gender" className="form-label">
//           Relocate:
//           </label>
//              <label htmlFor="relocateYes">Yes</label>
//             <input
//               type="checkbox"
//               name="relocate"
//               value="yes"
//               id="relocateYes"
//               checked={relocate === "yes"}
//               onChange={() => handleCheckboxChange("yes")}
//             />
//             <label htmlFor="relocateNo">No</label>
//             <input
//               type="checkbox"
//               name="relocate"
//               value="no"
//               id="relocateNo"
//               checked={relocate === "no"}
//               onChange={() => handleCheckboxChange("no")}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <button className="btn" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;
