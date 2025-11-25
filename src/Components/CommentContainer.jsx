import React from 'react'
import { Dummy_Comments } from '../utils/Constants'
const DummyComment = ({ data }) => {

  const { name, comment, img } = data
  return (
    <div className=' flex pl-4 gap-2 bg-gray-50 border-l-2 border-b-2'>
      <img className='w-12' src={img} alt="img" />
      <div>
        <p className='font-semibold'>{name}</p>
        <p>{comment}</p>
      </div>

    </div>
  )
}
const CommentList = ({ commentList }) => {
  console.log(commentList)
  return commentList?.map(comment => (
    <div className=' '>
      <DummyComment  data={comment} />
      <div className=' pl-5  '>
        {/* <div className='w-4  border-b-2'></div> */}
        {/* <DummyComment data={comment.replies[0]}/> */}
        <CommentList commentList={comment?.replies}  />{/* using comment list again but sending replies as props, applying recursion */}
      </div>
    </div>))

}
const CommentContainer = () => {
  return (
    <div>
      <CommentList commentList={Dummy_Comments} />

    </div>
  )

}


export default CommentContainer