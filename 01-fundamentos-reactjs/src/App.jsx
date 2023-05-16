import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ea ex amet totam reiciendis eaque, ipsam neque id. Exercitationem ad odit velit deserunt quae quis rerum saepe assumenda, necessitatibus tempore."
          />
          <Post
            author="Thiago Jesus"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ea ex amet totam reiciendis eaque, ipsam neque id. Exercitationem ad odit velit deserunt quae quis rerum saepe assumenda, necessitatibus tempore."
          />
          <Post
            author="Thiago Jesus"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ea ex amet totam reiciendis eaque, ipsam neque id. Exercitationem ad odit velit deserunt quae quis rerum saepe assumenda, necessitatibus tempore."
          />
        </main>
      </div>
    </div>
  )
}