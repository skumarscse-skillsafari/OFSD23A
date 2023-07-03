import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Config/firebase-config";

const Remainder = () => {
  const [createRemainder, setCreateRemainder] = useState("");
  const [getRemainders, setGetRemainders] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    const getRemaindersFn = async () => {
      const remainderSnapShot = await getDocs(collection(db, "remainder"));
      //   console.log(remainderSnapShot);
      const dataArr = remainderSnapShot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      //   console.log(dataArr);
      setGetRemainders(dataArr);
    };

    getRemaindersFn();
  }, []);

  const handleRemainder = async (e) => {
    try {
      e.preventDefault();
      await addDoc(collection(db, "remainder"), {
        remainder: createRemainder,
        isChecked: false,
        timestamp: serverTimestamp(),
      });
      alert("Remainder added successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRemainder = async (id) => {
    try {
      if (window.confirm("Are you sure to delete the data?")) {
        await deleteDoc(doc(db, "remainder", id));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2 className="display-4 text-center">Remainder Component</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                ADD REMAINDER
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        ADD REMAINDER
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
                          placeholder="Enter remainder"
                          aria-label=".form-control-lg example"
                          onChange={(e) => setCreateRemainder(e.target.value)}
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
                        ADD REMAINDER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {getRemainders.map(({ id, remainder, isChecked, timestamp }) => (
            <div key={id} className="remainder-container mt-3">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </span>
                      <h5 className="card-title">{remainder}</h5>
                      <i className="card-text">
                        {new Date(timestamp.seconds * 1000).toLocaleString()}
                      </i>
                      <div className="float-end">
                        <button className="btn btn-primary me-3">Edit</button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteRemainder(id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Remainder;
