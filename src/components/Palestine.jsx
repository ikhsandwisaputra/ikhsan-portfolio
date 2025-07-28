import '../css/palestine.css'; // Pastikan path ini sesuai dengan struktur project-mu

const Palesine = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="loaderr text-2xl md:text-3xl">
        <div className='flex gap-1'>

        <p>#freepalestine </p>
        <img src="/ikhsan-portfolio/palestine.svg" alt="palestine" width="30px" height="30px" />
        </div>
        <span className="Particle_heart">♥</span>
        <span className="Particle_heart">♥</span>
        <span className="Particle_heart">♥</span>
        <span className="Particle_heart">♥</span>
      </div>
    </div>
  );
};

export default Palesine;
