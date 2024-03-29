import { useState } from 'react';
import { useRouter } from 'next/router';
import Main from "../../components/Main.js"


export default function ReplyForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({ name: '', reply: '', comment: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save reply');
      }

        // Redirect to a different page
        router.push('/pond');
    } catch (error) {
      console.error(error);
      alert('Failed to save reply');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
  <Main>

        <div className="h-3/4 min-h-40em max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Reply</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="replyYes"
                  name="reply"
                  value="Yes"
                  checked={formData.reply === 'Yes'}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="replyYes" className="mr-2 text-sm">
                  Yes
                </label>
                <input
                  type="radio"
                  id="replyNo"
                  name="reply"
                  value="No"
                  checked={formData.reply === 'No'}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="replyNo" className="mr-2 text-sm">
                  No
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your comment"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

    </Main>
  );
}
