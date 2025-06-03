const Titulo = ({ titulo, subtitulo }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">{titulo}</h1>
      {subtitulo && <p className="text-gray-600 mt-2">{subtitulo}</p>}
    </div>
  );
};

export default Titulo;
