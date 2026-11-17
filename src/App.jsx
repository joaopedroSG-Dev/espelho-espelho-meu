import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiCompass, FiHeart, FiHome, FiPlusSquare, FiSend, FiUser, FiX } from 'react-icons/fi'
import Header from './components/Header'
import Post from './components/Post'
import postsData from './data/posts.json'
import './App.css'

const stories = [
  { user: 'seu.story', label: 'Seu story', color: 'sunset', own: true, image: '/images/posts/post-1.svg', caption: 'Compartilhe um momento do seu dia.' },
  { user: 'ana.dev', label: 'Ana', color: 'lilac', image: '/images/posts/post-1.svg', caption: 'Um cantinho para criar com calma ✦' },
  { user: 'viajante', label: 'Lia', color: 'ocean', image: '/images/posts/post-2.svg', caption: 'Fica mais um pouco.' },
  { user: 'cafecomcodigo', label: 'Caio', color: 'coffee', image: '/images/posts/post-3.svg', caption: 'Cafe, codigo e um bom som.' },
  { user: 'marina.cria', label: 'Marina', color: 'rose', image: '/images/posts/post-2.svg', caption: 'Colecionando dias bonitos.' },
  { user: 'leo.fotografa', label: 'Leo', color: 'gold', image: '/images/posts/post-1.svg', caption: 'Luz boa muda tudo.' },
]

function App() {
  const [posts, setPosts] = useState(postsData)
  const [activeStory, setActiveStory] = useState(null)
  const updatePost = (id, update) => setPosts((current) => current.map((post) => post.id === id ? { ...post, ...update(post) } : post))
  const addComment = (id, comment) => updatePost(id, (post) => ({ comments: [...(post.comments || []), comment] }))

  return (
    <div className="app-shell">
      <Header />
      <main className="layout">
        <section className="feed-column" aria-label="Feed de publicacoes">
          <section className="stories" aria-label="Stories">
            {stories.map((story) => (
              <button className="story" type="button" key={story.user} aria-label={`Abrir story de ${story.label}`} onClick={() => setActiveStory(stories.indexOf(story))}>
                <span className={`story__ring story__ring--${story.color}`}>
                  <span className={`story__avatar story__avatar--${story.color}`}>{story.own ? <FiPlusSquare /> : story.label.slice(0, 1)}</span>
                </span>
                <span className="story__label">{story.label}</span>
              </button>
            ))}
          </section>
          <div className="feed-heading"><span>Seu feed</span><span>Ideias de pessoas que voce admira.</span></div>
          <div className="posts-list">
            {posts.map((post) => <Post key={post.id} post={post} onToggleLike={() => updatePost(post.id, (item) => ({ liked: !item.liked, likes: item.likes + (item.liked ? -1 : 1) }))} onToggleSave={() => updatePost(post.id, (item) => ({ saved: !item.saved }))} onAddComment={(comment) => addComment(post.id, comment)} />)}
          </div>
        </section>
        <aside className="sidebar" aria-label="Sugestoes para voce">
          <div className="profile-switch">
            <div className="avatar avatar--you">J</div><div className="profile-switch__name"><strong>joao.cria</strong><span>Joao Galvao</span></div><button type="button" className="text-action">Trocar</button>
          </div>
          <div className="suggestion-heading"><span>Sugestoes para voce</span><button type="button">Ver tudo</button></div>
          {stories.slice(1, 5).map((story) => <div className="suggestion" key={story.user}><div className={`avatar avatar--${story.color}`}>{story.label.slice(0, 1)}</div><div className="suggestion__name"><strong>{story.user}</strong><span>Seguido(a) por pessoas que voce admira</span></div><button type="button" className="text-action">Seguir</button></div>)}
          <p className="sidebar__note">Um espaco para acompanhar quem inspira voce. ✦</p>
        </aside>
      </main>
      <nav className="mobile-nav" aria-label="Navegacao movel">
        <button type="button" aria-label="Inicio"><FiHome /></button><button type="button" aria-label="Explorar"><FiCompass /></button><button type="button" aria-label="Criar publicacao"><FiPlusSquare /></button><button type="button" aria-label="Mensagens"><FiSend /></button><button type="button" aria-label="Perfil"><FiUser /></button>
      </nav>
      <footer className="site-footer">Feito para celebrar as ideias que fazem voce brilhar <span>✦</span></footer>
      {activeStory !== null && (
        <div className="story-viewer" role="dialog" aria-modal="true" aria-label={`Story de ${stories[activeStory].label}`} onClick={() => setActiveStory(null)}>
          <div className="story-viewer__card" onClick={(event) => event.stopPropagation()}>
            <div className="story-viewer__progress"><span /></div>
            <div className="story-viewer__top"><span className={`story-viewer__avatar story__avatar--${stories[activeStory].color}`}>{stories[activeStory].label.slice(0, 1)}</span><strong>{stories[activeStory].own ? 'Seu story' : stories[activeStory].user}</strong><button type="button" aria-label="Fechar story" onClick={() => setActiveStory(null)}><FiX /></button></div>
            <img className="story-viewer__image" src={stories[activeStory].image} alt={`Story de ${stories[activeStory].label}`} />
            <p className="story-viewer__caption">{stories[activeStory].caption}</p>
            <button className="story-viewer__previous" type="button" aria-label="Story anterior" onClick={() => setActiveStory((activeStory + stories.length - 1) % stories.length)}><FiChevronLeft /></button>
            <button className="story-viewer__next" type="button" aria-label="Proximo story" onClick={() => setActiveStory((activeStory + 1) % stories.length)}><FiChevronRight /></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
