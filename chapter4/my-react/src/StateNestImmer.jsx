import { useImmer } from 'use-immer';

export default function StateNestImmer() {
  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      perfecture: '広島県',
      city: '原町',
    },
  });

  const handleForm = (e) => {
    setForm((form) => {
      form[e.target.name] = e.target.value;
    });
  };
  const handleFormNest = (e) => {
    setForm((form) => {
      form.address[e.target.name] = e.target.value;
    });
  };
}
