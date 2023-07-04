import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Config/firebase-config";
import { useState } from "react";
const EditRemainder = ({ editRemainder, id }) => {
  const [remainder, setRemainder] = useState([editRemainder]);
  //   console.log(remainder);

  const handleRemainder = async () => {
    try {
      if (window.confirm("Are you sure to update the remainder?")) {
        const remainderRef = doc(db, "remainder", id);
        await updateDoc(remainderRef, {
          remainder: remainder,
        });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#edit-modal-${id}`}
      >
        Edit
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`edit-modal-${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT REMAINDER
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Edit remainder"
                  value={remainder}
                  aria-label=".form-control-lg example"
                  onChange={(e) => setRemainder(e.target.value)}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleRemainder}
              >
                EDIT REMAINDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRemainder;
