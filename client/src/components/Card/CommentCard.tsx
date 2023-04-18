import React from 'react'
import AvatarCircle from '../../pages/AvatarCircle'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CommentCard = () => {
  return (  
    <div className='flex items-start space-x-4'>
        <AvatarCircle/>
        <div className=''>
            <div className='flex items-center'>
                <span className='font-bold'>Tâm nguyễn</span>
                <span className='dot'>2 ngày trước</span>
            </div>
            <p>Dậy đi nhận lì xì thôi các bạn ơiii</p>
            <button className='gap-2 btn btn-sm btn-ghost normal-case font-bold text-sm'>
                <FontAwesomeIcon icon={faReply}/>
                Phản hồi
            </button>
        </div>
    </div>
  )
}

export default CommentCard