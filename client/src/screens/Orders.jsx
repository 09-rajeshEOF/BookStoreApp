import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useContext } from 'react';
import { Context } from '../service/context/BookContext';
import BookCard from '../components/BookCard';

export default function Orders() {
  const { state } = useContext(Context);

  return (
    <View style={styles.container}>
      {state.orders.length > 0 ? (
        <FlatList
          data={state.orders}
          renderItem={({ item }) => (
            <BookCard key={(item.id)} product={item} buttonText="Check Order" />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noOrders}>No orders yet!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noOrders: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
});




// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';
// import { useContext } from 'react';
// import { Context } from '../service/context/BookContext'
// export default function Orders() {
//   const { state } = useContext(Context);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Orders</Text>
//       {state.orders.length > 0 ? (
//         state.orders.map((order, index) => (
//           <Text key={index} style={styles.order}>
//             {order.title}
//           </Text>
//         ))
//       ) : (
//         <Text style={styles.noOrders}>No orders yet!</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   order: {
//     fontSize: 18,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   noOrders: {
//     fontSize: 18,
//     padding: 10,
//   },
// });


