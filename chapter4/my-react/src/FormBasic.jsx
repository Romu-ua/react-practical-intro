import { useForm } from 'react-hook-form';
import './FormBasic.css';

export default function FormBasic() {
  const defaultValues = {
    name: '名無し',
    email: 'example@example.com',
    gender: 'male',
    memo: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前：</label> <br />
        <input
          id="name"
          type="text"
          {...register('name', {
            required: '名前は必須入力です',
            maxLength: {
              value: 20,
              message: '名前は20文字以内にしてください。',
            },
          })}
        />
        <div className="error">{errors.name?.message}</div>
      </div>
      <div>
        <label>性別</label>
        <br />
        <label>
          <input
            id="male"
            type="radio"
            value="male"
            {...register('gender', {
              required: '性別は必須です。',
            })}
          />
          男性
        </label>
        <label>
          <input
            id="female"
            type="radio"
            value="female"
            {...register('gender', {
              required: '性別は必須です。',
            })}
          />
          女性
        </label>
        <div className="error">{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label> <br />
        <input
          id="email"
          type="text"
          {...register('email', {
            required: 'メールアドレスは必須入力です',
            pattern: {
              value:
                /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i,
              message: 'メールアドレスの形式が不正です',
            },
          })}
        />
        <div className="error">{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考</label>
        <textarea
          id="memo"
          {...register('memo', {
            required: '備考は必須入力です',
            minLength: {
              value: 10,
              message: '備考は10文字以上にしてください。',
            },
          })}
        />
        <div className="error">{errors.memo?.message}</div>
      </div>
      <div>
        <button type="button">送信</button>
      </div>
    </form>
  );
}
