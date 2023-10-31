import { Button, Chip } from '@mantine/core';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <>
      <div className="container mx-auto space-y-4 px-4 py-10">
        <Button variant="filled">test</Button>
        <Button
          variant="filled"
          classNames={{
            root: 'bg-blue-300',
          }}
        >
          test
        </Button>
        <Chip defaultChecked>Awesome chip</Chip>
      </div>
    </>
  );
}

export default App;
