---
path: "/tips/post-187"
date: "2020-05-27"
title: "Using the Container & Presentational pattern in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/q_auto/w_1000/v1590592617/tips/187-1_qv0e0e.png'
description: 'Splitting components in React into container and presentational'
number: 187
status: true
---

What's up guys, how are you? 😁  
Today I want to share with you a simple but very useful pattern that I personally use a lot when writing React applications: the Container & Presentational pattern.

Basically the core of this pattern is that you split a Component into two Components: one that will deal with all the necessary logic (data fetching, data mutations, business logic, etc) and another that will that deal with rendering the UI.

If you've built at least a medium sized React application you know that things can start getting really messy, real quick. Your Components start simple and small but then they keep growing bigger with more and more complexity. This pattern is super useful to help you have more readable and understandable Components as well as having a clear separation of concerns.

```jsx

const NotificationsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    setLoading(true);
    axios
      .get("SOME-URL")
      .then((res) => {
        setNotifications(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  const markAsRead = (notificationId) => {
    const newNotifications = notifications.map((not) =>
      not.id === notificationId ? { ...not, unRead: false } : not
    );
    setNotifications(newNotifications);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <Notifications
      notifications={notifications}
      markAsRead={markAsRead}
      loading={loading}
      error={error}
    />
  );
};

export default NotificationsContainer;

```

Look at this mock example. We want to have a Component that will fetch some notifications from some API, have some methods to mutate these notifications and have some logic to deal with errors and loading.

So, we create a NotificationsContainer where we'll do everything mentioned above. Then, this Component will simply return Notifications - the presentational Component - and pass it all the necessary properties and methods.

```jsx

export const Notifications = (props) => {
  return (
    <div className="notifications">
      {props.error ? (
        <div>There was an error fetching notifications</div>
      ) : props.loading ? (
        <div>Loading notifications</div>
      ) : (
        props.notifications.map((not) => (
          <div key={not.id} onClick={() => props.markAsRead(not.id)}>
            <p>{not.title}</p>
            <span>{not.date}</span>
          </div>
        ))
      )}
    </div>
  );
};

```

Finally, the Notifications component will simply receive what it needs as props and will just deal with rendering the elements that we need!

Hope you give this a try, you'll see it's helpful! Take care guys 😁🙏
