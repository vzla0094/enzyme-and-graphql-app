export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: any;
  _FieldSet: any;
};

export type GQLQuery = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<GQLUser>>>;
  user?: Maybe<GQLUser>;
  posts?: Maybe<Array<Maybe<GQLPost>>>;
  post?: Maybe<GQLPost>;
  comments?: Maybe<Array<Maybe<GQLComment>>>;
  comment?: Maybe<GQLComment>;
  _typeDefs: Scalars['String'];
  _entities: Array<Maybe<GQL_Entity>>;
  _service: GQL_Service;
  _aggregation: Scalars['Float'];
};


export type GQLQueryUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<GQLUsersWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type GQLQueryUserArgs = {
  id: Scalars['ID'];
};


export type GQLQueryPostsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<GQLPostsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type GQLQueryPostArgs = {
  id: Scalars['ID'];
};


export type GQLQueryCommentsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<GQLCommentsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type GQLQueryCommentArgs = {
  id: Scalars['ID'];
};


export type GQLQuery_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type GQLQuery_AggregationArgs = {
  type?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  stat: Scalars['String'];
  ref?: Maybe<Scalars['String']>;
};

export type GQLUsersWhere = {
  and?: Maybe<Array<GQLUsersWhere>>;
  or?: Maybe<Array<GQLUsersWhere>>;
  not?: Maybe<Array<GQLUsersWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  firstname_contains?: Maybe<Scalars['String']>;
  firstname_startswith?: Maybe<Scalars['String']>;
  firstname_endswith?: Maybe<Scalars['String']>;
  firstname_eq?: Maybe<Scalars['String']>;
  firstname_neq?: Maybe<Scalars['String']>;
  firstname_in?: Maybe<Array<Scalars['String']>>;
  firstname_nin?: Maybe<Array<Scalars['String']>>;
  firstname_exists?: Maybe<Scalars['Boolean']>;
  age_gt?: Maybe<Scalars['Int']>;
  age_ge?: Maybe<Scalars['Int']>;
  age_lt?: Maybe<Scalars['Int']>;
  age_le?: Maybe<Scalars['Int']>;
  age_eq?: Maybe<Scalars['Int']>;
  age_neq?: Maybe<Scalars['Int']>;
  age_in?: Maybe<Array<Scalars['Int']>>;
  age_nin?: Maybe<Array<Scalars['Int']>>;
  age_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
};

export type GQLUser = {
  __typename?: 'User';
  id: Scalars['ID'];
  _nest: GQLUser;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  posts?: Maybe<Array<Maybe<GQLPost>>>;
  comments?: Maybe<Array<Maybe<GQLComment>>>;
  firstname: Scalars['String'];
  age: Scalars['Int'];
};


export type GQLUser_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type GQLUser_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type GQLUser_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type GQLUserPostsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<GQLPostsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type GQLUserCommentsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<GQLCommentsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type GQLUserFirstnameArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type GQLUserAgeArgs = {
  math?: Maybe<GQLMathOptions>;
};

export type GQLPostsWhere = {
  and?: Maybe<Array<GQLPostsWhere>>;
  or?: Maybe<Array<GQLPostsWhere>>;
  not?: Maybe<Array<GQLPostsWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  title_contains?: Maybe<Scalars['String']>;
  title_startswith?: Maybe<Scalars['String']>;
  title_endswith?: Maybe<Scalars['String']>;
  title_eq?: Maybe<Scalars['String']>;
  title_neq?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_nin?: Maybe<Array<Scalars['String']>>;
  title_exists?: Maybe<Scalars['Boolean']>;
  date_contains?: Maybe<Scalars['String']>;
  date_startswith?: Maybe<Scalars['String']>;
  date_endswith?: Maybe<Scalars['String']>;
  date_eq?: Maybe<Scalars['String']>;
  date_neq?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Scalars['String']>>;
  date_nin?: Maybe<Array<Scalars['String']>>;
  date_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  user_and?: Maybe<Array<GQLUsersWhere>>;
  user_or?: Maybe<Array<GQLUsersWhere>>;
  user_not?: Maybe<Array<GQLUsersWhere>>;
  user_id_gt?: Maybe<Scalars['Float']>;
  user_id_ge?: Maybe<Scalars['Float']>;
  user_id_lt?: Maybe<Scalars['Float']>;
  user_id_le?: Maybe<Scalars['Float']>;
  user_id_eq?: Maybe<Scalars['Float']>;
  user_id_neq?: Maybe<Scalars['Float']>;
  user_id_in?: Maybe<Array<Scalars['ID']>>;
  user_id_nin?: Maybe<Array<Scalars['ID']>>;
  user_firstname_contains?: Maybe<Scalars['String']>;
  user_firstname_startswith?: Maybe<Scalars['String']>;
  user_firstname_endswith?: Maybe<Scalars['String']>;
  user_firstname_eq?: Maybe<Scalars['String']>;
  user_firstname_neq?: Maybe<Scalars['String']>;
  user_firstname_in?: Maybe<Array<Scalars['String']>>;
  user_firstname_nin?: Maybe<Array<Scalars['String']>>;
  user_firstname_exists?: Maybe<Scalars['Boolean']>;
  user_age_gt?: Maybe<Scalars['Int']>;
  user_age_ge?: Maybe<Scalars['Int']>;
  user_age_lt?: Maybe<Scalars['Int']>;
  user_age_le?: Maybe<Scalars['Int']>;
  user_age_eq?: Maybe<Scalars['Int']>;
  user_age_neq?: Maybe<Scalars['Int']>;
  user_age_in?: Maybe<Array<Scalars['Int']>>;
  user_age_nin?: Maybe<Array<Scalars['Int']>>;
  user_age_exists?: Maybe<Scalars['Boolean']>;
  user_search?: Maybe<Scalars['String']>;
  user_like?: Maybe<Scalars['String']>;
};

export type GQLPost = {
  __typename?: 'Post';
  id: Scalars['ID'];
  _nest: GQLPost;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  comments?: Maybe<Array<Maybe<GQLComment>>>;
  user: GQLUser;
  title: Scalars['String'];
  date: Scalars['String'];
};


export type GQLPost_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type GQLPost_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type GQLPost_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type GQLPostCommentsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<GQLCommentsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type GQLPostTitleArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type GQLPostDateArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type GQLCommentsWhere = {
  and?: Maybe<Array<GQLCommentsWhere>>;
  or?: Maybe<Array<GQLCommentsWhere>>;
  not?: Maybe<Array<GQLCommentsWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  post_id_exists?: Maybe<Scalars['Boolean']>;
  text_contains?: Maybe<Scalars['String']>;
  text_startswith?: Maybe<Scalars['String']>;
  text_endswith?: Maybe<Scalars['String']>;
  text_eq?: Maybe<Scalars['String']>;
  text_neq?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_nin?: Maybe<Array<Scalars['String']>>;
  text_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  user_and?: Maybe<Array<GQLUsersWhere>>;
  user_or?: Maybe<Array<GQLUsersWhere>>;
  user_not?: Maybe<Array<GQLUsersWhere>>;
  user_id_gt?: Maybe<Scalars['Float']>;
  user_id_ge?: Maybe<Scalars['Float']>;
  user_id_lt?: Maybe<Scalars['Float']>;
  user_id_le?: Maybe<Scalars['Float']>;
  user_id_eq?: Maybe<Scalars['Float']>;
  user_id_neq?: Maybe<Scalars['Float']>;
  user_id_in?: Maybe<Array<Scalars['ID']>>;
  user_id_nin?: Maybe<Array<Scalars['ID']>>;
  user_firstname_contains?: Maybe<Scalars['String']>;
  user_firstname_startswith?: Maybe<Scalars['String']>;
  user_firstname_endswith?: Maybe<Scalars['String']>;
  user_firstname_eq?: Maybe<Scalars['String']>;
  user_firstname_neq?: Maybe<Scalars['String']>;
  user_firstname_in?: Maybe<Array<Scalars['String']>>;
  user_firstname_nin?: Maybe<Array<Scalars['String']>>;
  user_firstname_exists?: Maybe<Scalars['Boolean']>;
  user_age_gt?: Maybe<Scalars['Int']>;
  user_age_ge?: Maybe<Scalars['Int']>;
  user_age_lt?: Maybe<Scalars['Int']>;
  user_age_le?: Maybe<Scalars['Int']>;
  user_age_eq?: Maybe<Scalars['Int']>;
  user_age_neq?: Maybe<Scalars['Int']>;
  user_age_in?: Maybe<Array<Scalars['Int']>>;
  user_age_nin?: Maybe<Array<Scalars['Int']>>;
  user_age_exists?: Maybe<Scalars['Boolean']>;
  user_search?: Maybe<Scalars['String']>;
  user_like?: Maybe<Scalars['String']>;
  post_and?: Maybe<Array<GQLPostsWhere>>;
  post_or?: Maybe<Array<GQLPostsWhere>>;
  post_not?: Maybe<Array<GQLPostsWhere>>;
  post_id_gt?: Maybe<Scalars['Float']>;
  post_id_ge?: Maybe<Scalars['Float']>;
  post_id_lt?: Maybe<Scalars['Float']>;
  post_id_le?: Maybe<Scalars['Float']>;
  post_id_eq?: Maybe<Scalars['Float']>;
  post_id_neq?: Maybe<Scalars['Float']>;
  post_id_in?: Maybe<Array<Scalars['ID']>>;
  post_id_nin?: Maybe<Array<Scalars['ID']>>;
  post_user_id_exists?: Maybe<Scalars['Boolean']>;
  post_title_contains?: Maybe<Scalars['String']>;
  post_title_startswith?: Maybe<Scalars['String']>;
  post_title_endswith?: Maybe<Scalars['String']>;
  post_title_eq?: Maybe<Scalars['String']>;
  post_title_neq?: Maybe<Scalars['String']>;
  post_title_in?: Maybe<Array<Scalars['String']>>;
  post_title_nin?: Maybe<Array<Scalars['String']>>;
  post_title_exists?: Maybe<Scalars['Boolean']>;
  post_date_contains?: Maybe<Scalars['String']>;
  post_date_startswith?: Maybe<Scalars['String']>;
  post_date_endswith?: Maybe<Scalars['String']>;
  post_date_eq?: Maybe<Scalars['String']>;
  post_date_neq?: Maybe<Scalars['String']>;
  post_date_in?: Maybe<Array<Scalars['String']>>;
  post_date_nin?: Maybe<Array<Scalars['String']>>;
  post_date_exists?: Maybe<Scalars['Boolean']>;
  post_search?: Maybe<Scalars['String']>;
  post_like?: Maybe<Scalars['String']>;
};

export type GQLComment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  _nest: GQLComment;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  user: GQLUser;
  post: GQLPost;
  text: Scalars['String'];
};


export type GQLComment_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type GQLComment_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type GQLComment_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type GQLCommentTextArgs = {
  length?: Maybe<Scalars['Int']>;
};

export enum GQLMathOptions {
  Round = 'ROUND',
  Floor = 'FLOOR',
  Ceil = 'CEIL'
}


export type GQL_Entity = GQLUser | GQLPost | GQLComment;

export type GQL_Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type GQLMutation = {
  __typename?: 'Mutation';
  incrementUserAge?: Maybe<Scalars['Int']>;
  decrementUserAge?: Maybe<Scalars['Int']>;
  createUser: GQLUser;
  updateUser: GQLUser;
  deleteUser: Scalars['ID'];
  createPost: GQLPost;
  updatePost: GQLPost;
  deletePost: Scalars['ID'];
  createComment: GQLComment;
  updateComment: GQLComment;
  deleteComment: Scalars['ID'];
  _createSnapshot: Scalars['Boolean'];
};


export type GQLMutationIncrementUserAgeArgs = {
  id: Scalars['ID'];
};


export type GQLMutationDecrementUserAgeArgs = {
  id: Scalars['ID'];
};


export type GQLMutationCreateUserArgs = {
  input: GQLCreateUserInput;
};


export type GQLMutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: GQLUpdateUserInput;
};


export type GQLMutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type GQLMutationCreatePostArgs = {
  input: GQLCreatePostInput;
};


export type GQLMutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: GQLUpdatePostInput;
};


export type GQLMutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type GQLMutationCreateCommentArgs = {
  input: GQLCreateCommentInput;
};


export type GQLMutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: GQLUpdateCommentInput;
};


export type GQLMutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type GQLMutation_CreateSnapshotArgs = {
  key: Scalars['String'];
};

export type GQLCreateUserInput = {
  firstname: Scalars['String'];
  age: Scalars['Int'];
};

export type GQLUpdateUserInput = {
  firstname?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
};

export type GQLCreatePostInput = {
  user_id: Scalars['ID'];
  title: Scalars['String'];
  date: Scalars['String'];
};

export type GQLUpdatePostInput = {
  user_id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type GQLCreateCommentInput = {
  user_id: Scalars['ID'];
  post_id: Scalars['ID'];
  text: Scalars['String'];
};

export type GQLUpdateCommentInput = {
  user_id?: Maybe<Scalars['ID']>;
  post_id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};



export type GQLUnnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type GQLUnnamed_1_Query = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<GQLUser, 'id' | 'firstname'>
  )>>> }
);
