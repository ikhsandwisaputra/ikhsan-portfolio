import '../css/element.css'; // Pastikan path-nya benar

const Element = () => {
  return (
    <div className='hidden lg:block'>
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="element relative block w-40 h-4 mt-2 border-t-2 border-dotted border-t-[#3ce8ff] overflow-hidden"
          style={{ '--i': i + 1 }}
        ></span>
      ))}
    </div>
  );
};

export default Element;
