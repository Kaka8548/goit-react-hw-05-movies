import { GoBackButton } from './GoBackBtn.styled';

export default function GoBackBtn({ backLinkHref }) {
  return <GoBackButton to={backLinkHref}>Go back</GoBackButton>;
}
