import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.pexels.com/photos/173294/pexels-photo-173294.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1'
            />

            <div className={styles.profile}>
                <Avatar  src="https://github.com/thiagojesusz.png"/>
                <strong>Thiago Jesus</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}