```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/profile" passHref>
        <a>Go to Profile</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```