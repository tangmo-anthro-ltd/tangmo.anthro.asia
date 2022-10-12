import * as React from 'react';
import { Link } from 'gatsby';

export default ({ breadcrumbs }: IProps) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {breadcrumbs.map(({ path, text }, i) => {
                if (i === breadcrumbs.length - 1) {
                    return (
                        <li key={text} className="breadcrumb-item active" aria-current="page">
                            {text}
                        </li>
                    );
                }
                return (
                    <li className="breadcrumb-item">
                        <Link to={path}>{text}</Link>
                    </li>
                );
            })}
        </ol>
    </nav>
);

interface IProps {
    breadcrumbs: {
        path: string;
        text: string;
    }[];
}
