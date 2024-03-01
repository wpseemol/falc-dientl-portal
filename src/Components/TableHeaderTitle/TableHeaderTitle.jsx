import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { TbCaretUpDownFilled } from 'react-icons/tb';

export default function TableHeaderTitle({ headTitle }) {
    const [sort, setSort] = useState(headTitle.status);
    return (
        <th>
            <button
                className="flex items-center gap-2"
                onClick={() =>
                    setSort(
                        sort === 'no'
                            ? 'ascending'
                            : sort === 'ascending'
                            ? 'descending'
                            : 'no'
                    )
                }>
                <p>{headTitle?.title} </p>
                <span>
                    {sort === 'no' && <TbCaretUpDownFilled />}
                    {sort === 'ascending' && <FaArrowUp />}
                    {sort === 'descending' && <FaArrowDown />}
                </span>
            </button>
        </th>
    );
}

TableHeaderTitle.propTypes = { headTitle: PropTypes.object };
