

import styles from './page.module.css'
import CompanyList from './components/CompanyList';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>SeuFornecedor - Seus fornecedores em um só lugar!</h1>
      <div>
        <CompanyList />
      </div>



    </main>
  )
}
