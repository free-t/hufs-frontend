import React, { useCallback, useState } from 'react';
export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  });
  return [value, onChange, setValue];
}
