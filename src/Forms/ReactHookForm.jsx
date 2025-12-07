import { useForm } from "react-hook-form"

const ReactHookForm = () => {
   let {register,handleSubmit,formState:{errors}} = useForm()
    console.log(errors);
   let formData = (data)=>{

    console.log(data);

   }
  return (
        <>
      <form onSubmit={handleSubmit(formData)} >
      <fieldset>
        <legend>Registration Form 🔥</legend>

           <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" {...register("name",{
        required:"name is required",
        minLength:{
          value:3,
          message:"name should be minimum of 3 characters"
        },
        maxLength:{
          value:10,
          message:"name should be maximum of 10 characters"
        }
      })}/>
      {errors.name && <p>{errors.name.message}</p>}
      <br /><br />
        <label htmlFor="email">Email:</label>
      <input type="email" id="email"  {...register("email",{ required:"Email is required" })}/>
       {errors.email && <p>{errors.email.message}</p>}
      <br /><br />

        <label htmlFor="password">Password:</label>
      <input type="password" id="password" {...register("password",{required:"Password is required" })}/> 
       {errors.password && <p>{errors.password.message}</p>}

      <br /><br />

        <label htmlFor="phonenumber">PhoneNumber::</label>
      <input type="tel" id="phonenumber" {...register("phone",{
        required:"Password is required",
        minLength:{value:10, message:"please check your phone number"},
         maxLength:{ value:10, message:"please check your phone number"},
        validate:(value)=> !isNaN(value) ? true : "please enter only numbers"
      })}/>
       {errors.phone && <p>{errors.phone.message}</p>}
      <br /><br />

        <label htmlFor="dob">dob:</label>
      <input type="datetime-local" id="dob"{...register("dob",{
         required:"dob is required",
         min:{ value:"2003-01-01", messge:"dob should be after 2003"} })} />
       {errors.dob && <p>{errors.dob.message}</p>}
      <br /><br />

      <label htmlFor="gender">Gender:</label> 
      <input type="radio" id="male" value="male" {...register("gender",{ required:"select any one of gender" })}/>
      <label htmlFor="male">Male</label>
      <input type="radio"  id="female" value="female" {...register("gender",{ required:"select any one of gender" })}/>
      <label htmlFor="female">Female</label> 
       {errors.gender && <p>{errors.gender.message}</p>}
      <br /><br />

       <label htmlFor="skills">Skills:</label> 
      <input type="checkbox"  id="html" value="html"  {...register("skills",{
        required:"select anyone of the skills"
      })}/>
      <label htmlFor="html">Html</label>
      <input type="checkbox"  id="css" value="css"  {...register("skills",{
        required:"select anyone of the skills"
      })}/>
      <label htmlFor="css">Css</label>
      <input type="checkbox"  id="js" value="js" {...register("skills",{
        required:"select anyone of the skills"
      })} />
      <label htmlFor="js">Js</label>
      <input type="checkbox"  id="react" value="react"  {...register("skills",{
        required:"select anyone of the skills"
      })}/>
      <label htmlFor="react">React Js</label>
       {errors.skills && <p>{errors.skills.message}</p>}
       <br /><br />

      <select id="country"  {...register("country",{required:"country is required",
        validate:(value)=> (value)=="--Select Option --" ? true :"please select country" })} >
        <option selected hidden>--Select Option --</option>
        <option>India</option>
        <option>Russia</option>
        <option >Australia</option>
        <option>Thailand</option>
      </select>
       {errors.country && <p>{errors.country.message}</p>}
      <br /><br />

      <label htmlFor="feeback">Feedback:</label>
       <input type="text" rows="10" cols="50" {...register("feedback",{
        required:"feedback is required",
        minLength:{
          value:15,
          message:"feedback should be minimum of 15 characters"
        },
          maxLength:{
          value:30,
          message:"feedback should be maximum of 30 characters"
        }
       })}/>
       {errors.feedback && <p>{errors.feedback.message}</p>}
        <br /><br />

      <label htmlFor="photo">Upload Photo:</label>
      <input type="file" {...register("photo",{
        required:"photo is mandatory"
      })}/>
       {errors.photo && <p>{errors.photo.message}</p>}
      <br /><br />

      <button type="submit">Register</button>
      <button type="reset">Reset</button>
      
      </fieldset>
    </form>
  </>
  )
}

export default ReactHookForm