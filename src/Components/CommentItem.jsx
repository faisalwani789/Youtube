import React from 'react'

const CommentItem = ({ comment }) => {
    console.log(comment)
    return (
        <div className="flex flex-col">
            {/* --- Main Comment Content --- */}
            <div className="flex gap-3 mb-2">
                {/* Text Content */}
                <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-800">
                        {comment.author}
                    </span>
                    <p className="text-gray-600 text-sm mt-1">
                        {comment.text}
                    </p>
                </div>
            </div>

            {/* --- Nested Replies (The Recursive Part) --- */}
            {comment.replies && comment.replies.length > 0 && (
                // This div creates the indentation and the "Thread Line"
                <div className="ml-3 pl-6 border-l-2 border-gray-200">
                    {comment.replies.map((reply,index) => (
                        <CommentItem key={index} comment={reply} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CommentItem


