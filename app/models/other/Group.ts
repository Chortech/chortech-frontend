export type Group = {
  id: string;
  name: string;
  creatorId: string;
  membersIds?: Array<string>;
  activitiesIds?: Array<string>;
};
