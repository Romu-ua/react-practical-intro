import { motion } from 'motion/react';

export default function MotionBasic() {
  return (
    <div>
      {/* <motion.img
        src="/image/logo.svg"
        alt="hugging face"
        animate={{ rotate: 720, x: 500 }}
      /> */}
      <motion.img
        src="/image/logo.svg"
        alt="hugging face"
        initial={{ x: '100vw' }}
        animate={{ x: '40vw' }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
