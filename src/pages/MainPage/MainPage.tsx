import { PostPreview, SortBlock } from '@components'

import styles from './MainPage.module.scss'

export const MainPage: React.FC = () => {
  const fakePost = {
    id: 'asfasggagag',
    title: 'Заголовок поста',
    image: 'http://localhost:5000/uploads/back_1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit laoreet. Amet risus nullam eget felis eget nunc lobortis. Curabitur gravida arcu ac tortor dignissim convallis. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Aliquam etiam erat velit scelerisque in dictum non. Purus ut faucibus pulvinar elementum. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Eu volutpat odio facilisis mauris sit amet massa vitae. Velit egestas dui id ornare arcu odio ut. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Laoreet id donec ultrices tincidunt arcu. Ut pharetra sit amet aliquam. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Cursus in hac habitasse platea. <br>Vitae sapien pellentesque habitant morbi tristique senectus. Eget duis at tellus at urna condimentum mattis. Malesuada proin libero nunc consequat interdum varius. Sem fringilla ut morbi tincidunt augue. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Tempus quam pellentesque nec nam aliquam. Volutpat sed cras ornare arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Eleifend mi in nulla posuere sollicitudin aliquam. Eu facilisis sed odio morbi quis commodo odio aenean sed. Enim nunc faucibus a pellentesque sit amet. Nisi scelerisque eu ultrices vitae auctor. Sed tempus urna et pharetra. Quam elementum pulvinar etiam non quam lacus suspendisse. Sed turpis tincidunt id aliquet risus feugiat in. Morbi non arcu risus quis varius quam quisque id diam.<br>Quis vel eros donec ac odio tempor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Eget est lorem ipsum dolor sit. Cum sociis natoque penatibus et magnis dis parturient montes. Aenean et tortor at risus viverra adipiscing at in tellus. Vulputate sapien nec sagittis aliquam malesuada bibendum. Nisl vel pretium lectus quam id leo in vitae turpis. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Dictum fusce ut placerat orci nulla. Velit egestas dui id ornare arcu odio ut sem nulla. Sed lectus vestibulum mattis ullamcorper. <br> Fringilla ut morbi tincidunt augue. Sed odio morbi quis commodo odio. Amet commodo nulla facilisi nullam vehicula ipsum a. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Non enim praesent elementum facilisis leo vel fringilla. Amet mattis vulputate enim nulla aliquet. Lorem ipsum dolor sit amet. A diam sollicitudin tempor id eu nisl nunc. Sit amet dictum sit amet justo donec enim diam. Sapien nec sagittis aliquam malesuada bibendum arcu vitae.<br>Leo vel orci porta non pulvinar neque laoreet suspendisse. Enim sed faucibus turpis in eu mi bibendum neque. Enim facilisis gravida neque convallis a. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Blandit aliquam etiam erat velit. Purus in massa tempor nec feugiat. Nec feugiat nisl pretium fusce id velit ut. Sit amet cursus sit amet dictum sit amet justo donec. Ut placerat orci nulla pellentesque dignissim enim sit. Habitant morbi tristique senectus et netus et malesuada fames. Sed enim ut sem viverra aliquet eget sit. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Consequat semper viverra nam libero justo laoreet sit amet cursus. Vulputate dignissim suspendisse in est ante in nibh.',
    tags: ['tag1', 'space tag', ' really amazing tag', 'malesuada fames', 'Purus in massa', 'netus'],
    views: 144434,
    author: {
      name: 'Игнат Васильев',
      avatar: 'http://localhost:5000/uploads/moscow.jpg'
    },
    createTime: new Date('2023-08-29T13:24:03.988+00:00')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['main-content']}>
        <div className={styles['sort-wrapper']}>
          <SortBlock />
        </div>
        <div className={styles['post-wrapper']}>
          <PostPreview {...fakePost} />
          <PostPreview {...fakePost} />
          <PostPreview {...fakePost} />
        </div>
      </div>
      <div className={styles['side-content']}>afg</div>
    </div>
  )
}
