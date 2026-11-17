import { useState } from 'react'
import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi'

function Post({ post, onToggleLike, onToggleSave, onAddComment }) {
  const [comment, setComment] = useState('')
  const [showComments, setShowComments] = useState(false)
  const comments = post.comments || []

  function submitComment(event) {
    event.preventDefault()
    const text = comment.trim()
    if (!text) return
    onAddComment({ user: 'joao.cria', text })
    setComment('')
    setShowComments(true)
  }

  return (
    <article className="post">
      <header className="post__header">
        <img className="post__avatar" src={post.avatar} alt={`Foto de ${post.user}`} />
        <div className="post__user"><strong>{post.user}</strong><span>{post.location}</span></div>
        <button className="icon-button post__more" type="button" aria-label="Mais opções"><FiMoreHorizontal /></button>
      </header>
      <div className={`post__art post__art--${post.art}`}>
        <img className="post__image" src={post.image} alt={post.alt} onDoubleClick={onToggleLike} />
        <span className="post__art-label">{post.artLabel}</span>
        <span className="post__art-caption">{post.artCaption}</span>
      </div>
      <div className="post__content">
        <div className="post__actions">
          <button className={`icon-button ${post.liked ? 'is-liked' : ''}`} type="button" aria-label={post.liked ? 'Descurtir' : 'Curtir'} aria-pressed={Boolean(post.liked)} onClick={onToggleLike}><FiHeart /></button>
          <button className="icon-button" type="button" aria-label="Ver comentários" onClick={() => setShowComments((value) => !value)}><FiMessageCircle /></button>
          <button className="icon-button" type="button" aria-label="Enviar"><FiSend /></button>
          <button className={`icon-button post__save ${post.saved ? 'is-saved' : ''}`} type="button" aria-label={post.saved ? 'Remover dos salvos' : 'Salvar'} aria-pressed={Boolean(post.saved)} onClick={onToggleSave}><FiBookmark /></button>
        </div>
        <p className="post__likes"><strong>{post.likes.toLocaleString('pt-BR')} curtidas</strong></p>
        <p className="post__caption"><strong>{post.user}</strong>{post.caption}</p>
        {comments.length > 0 && <button className="post__view-comments" type="button" onClick={() => setShowComments((value) => !value)}>{showComments ? 'Ocultar comentários' : `Ver todos os ${comments.length} comentários`}</button>}
        {showComments && <div className="post__comments">{comments.map((item, index) => <p key={`${item.user}-${index}`}><strong>{item.user}</strong>{item.text}</p>)}</div>}
        <form className="post__comment-form" onSubmit={submitComment}><input value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Adicione um comentário..." aria-label="Adicione um comentário" /><button type="submit" disabled={!comment.trim()}>Publicar</button></form>
      </div>
    </article>
  )
}

export default Post
