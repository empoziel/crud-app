//prop obje olarak geldiğini ve içinde data olduğunu bildiğimiz için propu dağıtıp direkt olarak dataya erişiyoruz.
const BookCard = ({ data, handleModal, handleRead, handleEditModal }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border shadow rounded p-3 mt-5">
      <div>
        <h5 className={data.isRead ? "text-decoration-line-through" : " "}>
          {data.title}
        </h5>
        <p>{new Date(data.date).toLocaleString()}</p>
      </div>
      <div>
        <button onClick={() => handleModal(data.id)} className="btn btn-danger">
          Sil
        </button>
        <button
          onClick={() => handleEditModal(data)}
          className="btn btn-primary"
        >
          Düzenle
        </button>
        <button onClick={() => handleRead(data)} className="btn btn-success">
          {data.isRead ? "Okundu" : "Okunmadı"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
