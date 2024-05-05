const Footer = ({ items }) => {
  //
  if (!items.length) {
    return (
      <p className="footer">
        <em>Commencez à rajouter des articles pour votre check-list Voyage.</em>
      </p>
    );
  }

  //
  const isTrueStatus = items.filter((itemStatus) => itemStatus.status).length;

  const pourcent = Math.round((isTrueStatus / items.length) * 100);

  // IF IS TRUE STATUS === 0
  if (isTrueStatus === 0) {
    return (
      <p className="footer">
        <em>Commencez par cocher au moins un article de voyage...</em>
      </p>
    );
  }

  return (
    <div className="footer">
      {pourcent === 100 ? (
        <em>Vous êtes prêt pour voyager ✈️ </em>
      ) : (
        <em>
          Sur les {items.length} articles, vous avez coché {isTrueStatus}{" "}
          {isTrueStatus > 1 ? "articles" : "article"} , et donc avez rempli
          votre valise à {pourcent} %.
        </em>
      )}
    </div>
  );
};

export default Footer;
