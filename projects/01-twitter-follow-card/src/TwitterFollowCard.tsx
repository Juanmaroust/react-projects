import { ReactNode, useState } from "react";

export function TwitterFollowCard ({formatUserName, children, initialIsFollowing}:{formatUserName:Function, children:ReactNode, initialIsFollowing:boolean}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const followingStatus = isFollowing ? 'Following': 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        
        <article className='tw-followCard'>
        <header>
          <img alt="Avatar" src={`https://unavatar.io/google/${children}.com`} />
          <div>
            <strong>{children}</strong>
            <span>{formatUserName(children)}</span>
          </div>
        </header>
  
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-followingStatus'>{followingStatus}</span>
            <span className='tw-followCard-unfollow'>Unfollow</span>
          </button>
        </aside>
      </article>
  
    )
}