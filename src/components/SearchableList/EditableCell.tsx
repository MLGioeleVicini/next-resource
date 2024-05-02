import { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const EditableCell = ({
    getValue,
    row: { index },
    column: { id },
    table,
}: any) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    const onBlur = () => {
        table.options.meta?.updateData(index, id, value);

        
    };

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return (
        <div>
            <Input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onBlur={onBlur}
            />
        </div>
    );
};

export default EditableCell;
