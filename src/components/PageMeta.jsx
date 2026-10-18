/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const PageMeta = ({
  titleKey,
  defaultTitle,
  descKey,
  defaultDesc,
  url,
  image = "https://intersexnigeria.org/images/intersex%20logo.webp",
  schema,
}) => {
  const { t } = useTranslation();

  const title = titleKey ? t(titleKey, defaultTitle) : defaultTitle;
  const description = descKey ? t(descKey, defaultDesc) : defaultDesc;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {title && <meta name="twitter:title" content={title} />}
      <meta name="twitter:card" content="summary_large_image" />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default PageMeta;
