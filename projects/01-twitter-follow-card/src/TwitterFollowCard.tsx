import { ReactNode, useState } from "react";

export function TwitterFollowCard ({formatUserName, userName, children, initialIsFollowing}:{formatUserName:Function, userName:string, children:ReactNode, initialIsFollowing:boolean}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const followingStatus = isFollowing ? 'Following': 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        
        <article className='tw-followCard'>
        <header>
          <img alt="Avatar" src={`https://unavatar.io/google/${userName}.com`} />
          <div>
            <strong>{children}</strong>
            <span>{formatUserName(userName)}</span>
          </div>
        </header>
  
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            {followingStatus}
          </button>
        </aside>
      </article>
  
    )
}