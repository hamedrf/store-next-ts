import { comment } from "@/hook/redux/productsSlice";
import { useState } from "react";

interface CommentsProps {
  comment?: comment[];
  productId?: number;
}

const Comments: React.FC<CommentsProps> = ({ comment, productId }) => {
  const [formData, setFormData] = useState({
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://kharidpardeh.ir/api/comments/product/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form data submitted successfully:", formData);
        setFormData({
          description: "",
        });
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="border my-6 !mx-3 rounded-xl py-7 px-9">
        {comment ? (
          comment!.map((element) => {
            return (
              <div key={element.id}>
                <div className="flex justify-between w-full">
                  <div className="flex justify-start items-center">
                    <div className="w-12 h-12 bg-white rounded-full  border"></div>
                    <span className="!mx-4">{element.user.name}</span>
                  </div>
                  اخرین بروزرسانی : {element.created_at}
                </div>
                {element.description}
              </div>
            );
          })
        ) : (
          <div> هیچ کامنتی وجود ندارد</div>
        )}
      </div>
      <div className="border my-6 !mx-3 rounded-xl py-7 px-9">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            // value={}
            className="border rounded-2xl !py-3 !px-2 mx-2"
            placeholder="نام"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded-2xl !py-3 !px-2 mx-2"
            placeholder="توضیحات"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-2xl px-4 py-2"
            disabled={loading}
          >
            {loading ? "در حال ارسال..." : "ثبت"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Comments;
