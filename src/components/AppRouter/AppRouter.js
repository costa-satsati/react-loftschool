// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React, { PureComponent } from 'react';
import styles from './AppRouter.module.css';
import { withAuth } from '../../context/Auth';

class AppRouter extends PureComponent {
    render() {
      return (
        <div className={styles.wrapper}>
          Hello
        </div>
      );
    }
  }
  
  export default withAuth(AppRouter);
  