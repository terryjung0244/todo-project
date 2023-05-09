import CreateTodo from 'components/createTodo/CreateTodo'
import React from 'react'

const App = () => {
  return (
    <div>
      <CreateTodo/>
    </div>
  )
}

export default App


// let user = {
//   id: 1,
//   name: 'hong',
//   address: {
//     lat: '123', // '789
//     lng: '456', // '123
//     detail: {
//       apartment: 'AAA',
//       unit: 'BBB' // 'CCC
//     }
//   },
//   hobby: {
//     first: 'badminton',
//     second: 'playing game',
//     newHobby: {
//       first: 'fishing' // 'soccer'
//       // second new Hobby 추가 => 'climbing'
//     }
//   }
// };

// const user2 = {
//   ...user,
//   address: {
//     ...user.address,
//     lat: '789',
//     lng: '123',
//     detail: {
//       ...user.address.detail,
//       unit: 'CCC'
//     }
//   }, 
//   hobby: {
//     ...user.hobby,
//     newHobby: {
//       ...user.hobby.newHobby,
//       first: 'soccer',
//       second: 'climbing'
//     }
//   }
// };

// console.log(user2);


// let userList: any = [];
// // userList.push('a')
// // userList.push('b')
// userList = [...userList, 'a']
// userList = [...userList, 'b']
// console.log(userList);

// let user = {
//   id: 1
// };

// let newUser = {...user, id: 2 }

// let userList = ['a', 'b'];

// let newUserList = [...userList, 'c']

let user = {
  id: 1,
  name: 'hong',
  address: {
    lat: '123',
    lng: '456',
    detail: {
      apartment: 'AAA', // 'CCC'
      unit: 'BBB',
      // postalCode 추가
    }
  },
  hobby: {
    first: 'badminton',
    second: 'playing game',
    // third: '~' 추가
    newHobby: {
      first: 'fishing'
    }
  },
  children: [
    {
      id: 1,
      name: 'hong_1',
      hobby: {
        first: 'A',
      }
    },
    {
      id: 2,
      name: 'hong_2',
      hobby: {
        first: 'B',
      }
    },
    // 3번째 추가
    /**
     *  
     * {
          id: 3,
          name: 'hong_3',
          hobby: {
            first: 'B',
            // second: 'C' 추가
          }
        },
     */
  ]
};

// const { address: { detail: { apartment } } } = user;

let newUser = {
  ...user,
  address: {
    ...user.address.detail,
    apartment: 'CCC',
    postalCode: 'M4G'
  }, 
  hobby: {
    ...user.hobby, 
    third: 'Gaming'
  },
  children: [
    ...user.children, 
    {
      id: 3,
      name: 'hong_3',
      hobby: {
        first: 'B',
        second: 'C',
      }
    }
  ]
};

console.log(newUser)