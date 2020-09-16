import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import seo from 'src/seo';

interface Props {
    description: string;
    className: string;
    children?: ReactNode;
}
// title={post.frontmatter.title}
// description={post.frontmatter.description || post.excerpt}
export const Page = (props: Props): JSX.Element => {
    const { description, children, ...rest } = props;
    return (
        <div {...rest}>
            <Helmet>
                <html lang="en"></html>
                <meta charSet="utf-8" />
                <title>{seo.siteMetadata.title}</title>
                <meta name="description" content={description} />
            </Helmet>
            {children}
        </div>
    );
};
