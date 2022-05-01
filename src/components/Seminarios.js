import { DatePicker } from "@material-ui/pickers";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


function Seminarios() {
  const [fechaseleccionada, setFechaseleccionada] = useState(new Date())

  const redirectHome = useNavigate()

  const formik = useFormik({
    initialValues: {
      email:"",
      nombres:"",
      apellidos:""
    },
    
    // validationSchema: schema,

    onSubmit: (data, {resetForm}) => {
      redirectHome('/cursosseminarios')
      console.log(data)
      localStorage.setItem('datosusuario', JSON.stringify(data));
      const date = fechaseleccionada
      const months = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const formatDate = (date)=>{
        let formatted_date = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()
        return formatted_date;
    }
    
    const fechafinal = formatDate(date);
    localStorage.setItem('fechaseleccionada', JSON.stringify(fechafinal));
      console.log(fechafinal)
      resetForm()
      // dispatch(loginEmailPassword(data.email,data.password1))      
    },
    validate:data=>{
      let errors = {};
      if(!data.nombres){
       errors.nombres = 'Campo Requerido!'
      }
      if(!data.apellidos){
        errors.apellidos = 'Campo Requerido!'
       }
       if(!data.email){
        errors.email= 'Campo Requerido!'
       }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(data.email)){
      errors.email = 'Formato inválido de correo electrónico!'
      }
      return errors;
    }
})
  
  return (
    <div>
      <Navbar />
      <main className="bg-gray-800">
        <div class="max-w-7xl m-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="border-8 border-orange-200 rounded-lg h-1000 ">
              <div class="bg-white">
                {/* Div principal   */}
                <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 text-center">
                    Seminarios (Clases Síncronas)
                  </h2>
                  {/* Div Formulario   */}
                  <div class="sm:w-auto md:w-96 mx-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 justify-center xl:gap-x-8">
                    <form onSubmit={formik.handleSubmit}>

                      <div className="form-group">
                        {/* Div correo elec...  */}
                      <div class="relative z-0 w-full mb-6 group">
                        <input
                          type="email"
                          name="email"
                          className="form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required=""
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        <label
                          for="floating_email"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Correo electrónico
                          {formik.errors.email && <div className =" pt-4"><p className="text-red-500">{formik.errors.email}</p> </div>} 

                        </label>
                      </div>
                    {/* Div nombres y apellidos */}
                    
                      <div class="grid xl:grid-cols-2 xl:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type="text"
                            name="nombres"
                            id="floating_first_name"
                            className="form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                          value={formik.values.nombres}

                            onChange={formik.handleChange}
                          />
                          <label
                            for="floating_first_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Nombres
                            {formik.errors.nombres && <div className =" pt-4"><p className="text-red-500">{formik.errors.nombres}</p> </div>} 
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type="text"
                            name="apellidos"
                            id="floating_last_name"
                            className="form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                          value={formik.values.apellidos}

                            onChange={formik.handleChange}
                          />
                          <label
                            for="floating_last_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Apellidos
                            {formik.errors.apellidos && <div className =" pt-4"><p className="text-red-500">{formik.errors.apellidos}</p> </div>} 

                          </label>
                        </div>
                      </div>
                     <div className="">

                        {/* Div eleccion de fecha  */}

                      <div class="relative z-0 w-full mb-6 group">
                       
                        <label >
                          <p className="form-control text-xl font-extrabold tracking-tight text-gray-900 text-center">A continuación podrás elegir la fecha que deseas para iniciar</p> </label>
                        <label
                          for="floating_email"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          {/* Elegir fecha */}
                         
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">

                        <DatePicker className=" text-sm text-gray-500" value={fechaseleccionada} onChange={setFechaseleccionada} />
                      </div>
                      <button
                      
                        type="submit"
                        class="w-full text-white bg-gray-800 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Solicitar seminario
                      </button>
                     </div>
                        </div>

                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Seminarios;
