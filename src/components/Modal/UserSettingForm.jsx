import { useState } from 'react';
import { useForm/*, Controller*/ } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "./UserSettingForm.css"

const UserSettingForm = ({ onSubmit }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);

  const schema = Yup.object().shape({
    avatar: Yup.mixed(),
    gender: Yup.string().required('Gender is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    weight: Yup.number().positive('Weight must be a positive number').required('Weight is required'),
    activeTime: Yup.number().positive('Active time must be a positive number').required('Active time is required'),
    waterIntake: Yup.number().positive('Water intake must be a positive number').required('Water intake is required'),
  });

  const { register, handleSubmit, /*control,*/ formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       
      <div>
        <label>Avatar:</label>
        <input type="file" {...register('avatar')} onChange={handleAvatarChange} />
        {errors.avatar && <p>{errors.avatar.message}</p>}
        {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" style={{ width: '100px', height: '100px' }} />}
      </div>
      
      <div className='main'>
        <div>
          <div>
            <label className="label gender">Your gender identity</label>
            <label className='radio-container'>
              <input className="radio " type="radio" name="gender" value="woman" checked />
              {/* <span className="radio-checkmark"></span> */}
              Woman
            </label>
            <label>
              <input className="radio" type="radio" name="gender" value="man" {...register('gender')} />Man
            </label>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>

          <div>
            <label className="label name">Your name:</label>
            <input className="input" type="text" {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label className="label email">Email:</label>
            <input className="input" type="email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="">
            <label className="label norma">My daily norma</label>
            <div className="container-formula">
                <div>
                  <p>For woman</p>
                  <p className="formula">V=(M*0,03) + (T*0,4)</p>
                </div>
                <div>
                  <p>For man</p>
                  <p className="formula">V=(M*0,04) + (T*0,6)</p>
                </div>
              </div>
                <textarea className="text-formula" readOnly>* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</textarea>
              
            </div>

            <div className="sign">
            <svg
              className='svg'
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="22"
              fill="none"
              >
              <path
                fill="#9BE1A0"
                d="M1.263 12.75c.084.87.226 1.516.42 1.943.198.425.548.637 1.054.637.094 0 .179-.015.263-.032.086.017.17.032.265.032.504 0 .856-.212 1.052-.637.196-.427.335-1.073.42-1.943l.45-6.718c.083-1.31.125-2.249.125-2.819 0-.776-.202-1.382-.608-1.817C4.296.961 3.76.745 3.097.745c-.035 0-.062.007-.097.009-.033-.002-.06-.01-.094-.01-.665 0-1.2.217-1.607.652-.406.436-.61 1.042-.61 1.817 0 .57.042 1.51.126 2.82l.448 6.717Zm1.754 5.036c-.644 0-1.191.203-1.646.609-.454.407-.681.9-.681 1.48 0 .654.23 1.169.687 1.543.46.374.995.561 1.607.561.623 0 1.167-.184 1.632-.554.464-.368.696-.886.696-1.55 0-.579-.222-1.073-.666-1.48-.445-.406-.987-.61-1.63-.61"
              />
              </svg>
              <p className='hours'>Active time in hours</p>
            
              </div>
          </div>

        <div>
          <div>
            <label className="label weight">Your weight in kilograms:</label>
            <input className="input" type="number" {...register('weight')} />
            {errors.weight && <p>{errors.weight.message}</p>}
          </div>

          <div>
            <label className="label active">The time of active participation in sports:</label>
            <input className="input" type="number" {...register('activeTime')} />
            {errors.activeTime && <p>{errors.activeTime.message}</p>}
          </div>

          <div>
            <label className="label amount">The required amount of water in liters per day:</label>
            <p className="label water-drink">Write down how much water you will drink:</p>
            <input className="input" type="number" {...register('waterIntake')} />
            {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
            </div>
        </div>
      </div>

      <button className="button" type="submit">Save</button>
    </form>
  );
};

export default UserSettingForm;

