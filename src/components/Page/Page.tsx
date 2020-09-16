import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
    title: string;
    description: string;
    children?: ReactNode;
}
// title={post.frontmatter.title}
// description={post.frontmatter.description || post.excerpt}
export const Page = (props: Props) => {
    const { title, description, children, ...rest } = props;
    return (
        <div {...rest}>
            <Helmet>
                <html lang="en"></html>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={description} />
                <meta name="og:type" content="website" />
                <meta name="description" content="Helmet application" />
            </Helmet>
            {children}
        </div>
    );
};
