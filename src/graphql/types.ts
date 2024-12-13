export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Blob: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type AccessToken = Node & {
  readonly __typename?: 'AccessToken';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly description: Scalars['String']['output'];
  readonly descriptionHtml: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isActive: Scalars['Boolean']['output'];
  readonly isRevoked: Scalars['Boolean']['output'];
  readonly lastUsedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly logs: AccessTokenLogConnection;
  readonly path: Scalars['String']['output'];
  readonly scopes: ReadonlyArray<AccessTokenScope>;
  readonly title: Scalars['String']['output'];
  readonly token?: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly user: User;
};


export type AccessTokenLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AccessTokenConnection = {
  readonly __typename?: 'AccessTokenConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<AccessTokenEdge>>>;
  readonly nodes: ReadonlyArray<AccessToken>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type AccessTokenEdge = {
  readonly __typename?: 'AccessTokenEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<AccessToken>;
};

export type AccessTokenLog = Node & {
  readonly __typename?: 'AccessTokenLog';
  readonly accessToken: AccessToken;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly ipAddress: Scalars['String']['output'];
  readonly operationType: Scalars['String']['output'];
  readonly query: Scalars['String']['output'];
  readonly user: User;
  readonly userAgent: Scalars['String']['output'];
};

export type AccessTokenLogConnection = {
  readonly __typename?: 'AccessTokenLogConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<AccessTokenLogEdge>>>;
  readonly nodes: ReadonlyArray<AccessTokenLog>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type AccessTokenLogEdge = {
  readonly __typename?: 'AccessTokenLogEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<AccessTokenLog>;
};

export enum AccessTokenScope {
  /** @deprecated Not yet implemented */
  Administer = 'ADMINISTER',
  Read = 'READ',
  Write = 'WRITE'
}

export type AiReview = {
  readonly __typename?: 'AiReview';
  readonly comment?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  readonly newContent?: Maybe<Scalars['String']['output']>;
  readonly newTitle?: Maybe<Scalars['String']['output']>;
};

export type AiReviewUpdatedPayload = {
  readonly __typename?: 'AiReviewUpdatedPayload';
  readonly aiReview: AiReview;
};

export type ArchiveFolderInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type ArchiveFolderPayload = {
  readonly __typename?: 'ArchiveFolderPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folder: Folder;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
};

export type ArchiveFoldersInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly ids: ReadonlyArray<Scalars['ID']['input']>;
};

export type ArchiveFoldersPayload = {
  readonly __typename?: 'ArchiveFoldersPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folders: ReadonlyArray<Folder>;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
};

export type ArchiveGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
};

export type ArchiveGroupPayload = {
  readonly __typename?: 'ArchiveGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type ArchiveNoteInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type ArchiveNotePayload = {
  readonly __typename?: 'ArchiveNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type ArchiveNotesInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly ids: ReadonlyArray<Scalars['ID']['input']>;
};

export type ArchiveNotesPayload = {
  readonly __typename?: 'ArchiveNotesPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly notes: ReadonlyArray<Note>;
};

export type AttachNoteToFolderInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly folder: FolderInput;
  readonly noteId: Scalars['ID']['input'];
};

export type AttachNoteToFolderPayload = {
  readonly __typename?: 'AttachNoteToFolderPayload';
  readonly attachedFolder: Folder;
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
  readonly note: Note;
};

export type Attachment = Node & {
  readonly __typename?: 'Attachment';
  readonly author: User;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly data: Scalars['Blob']['output'];
  readonly dataUrl: Scalars['String']['output'];
  readonly filePreview?: Maybe<AttachmentFilePreview>;
  readonly id: Scalars['ID']['output'];
  readonly key: Scalars['String']['output'];
  readonly kind: AttachmentKind;
  /** @deprecated This feature is for internal use only. */
  readonly metadata: Scalars['String']['output'];
  readonly mimeType: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly path: Scalars['String']['output'];
  readonly size: Scalars['Int']['output'];
  readonly url: Scalars['String']['output'];
};

export type AttachmentConnection = {
  readonly __typename?: 'AttachmentConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<AttachmentEdge>>>;
  readonly nodes: ReadonlyArray<Attachment>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type AttachmentEdge = {
  readonly __typename?: 'AttachmentEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<Attachment>;
};

export type AttachmentFilePreview = Node & {
  readonly __typename?: 'AttachmentFilePreview';
  readonly asset?: Maybe<AttachmentFilePreviewAsset>;
  readonly attemptsCount: Scalars['Int']['output'];
  readonly conversionState: AttachmentFilePreviewConversionState;
  readonly id: Scalars['ID']['output'];
  readonly lastPreviewedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AttachmentFilePreviewAsset = Node & {
  readonly __typename?: 'AttachmentFilePreviewAsset';
  readonly height: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly width: Scalars['Int']['output'];
};

export enum AttachmentFilePreviewConversionState {
  Failed = 'FAILED',
  LimitExceeded = 'LIMIT_EXCEEDED',
  None = 'NONE',
  Processing = 'PROCESSING',
  Success = 'SUCCESS'
}

export enum AttachmentKind {
  General = 'GENERAL',
  GroupCoverImage = 'GROUP_COVER_IMAGE',
  UserAvatarImage = 'USER_AVATAR_IMAGE',
  UserCoverImage = 'USER_COVER_IMAGE'
}

export type Budget = {
  readonly __typename?: 'Budget';
  readonly consumed: Scalars['BigInt']['output'];
  readonly cost: Scalars['BigInt']['output'];
  readonly remaining: Scalars['BigInt']['output'];
};

export type CloseAnnouncementInput = {
  readonly announcementKey: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CloseAnnouncementPayload = {
  readonly __typename?: 'CloseAnnouncementPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CoeditRoom = Node & {
  readonly __typename?: 'CoeditRoom';
  readonly activeUserAccounts: ReadonlyArray<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type CollabModeData = {
  readonly __typename?: 'CollabModeData';
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly contentTocHtml: Scalars['String']['output'];
  readonly folders?: Maybe<FolderConnection>;
  readonly groups?: Maybe<ReadonlyArray<Group>>;
  readonly memberCount: Scalars['Int']['output'];
  readonly publishPlacesChanged: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};


export type CollabModeDataFoldersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Comment = CommentInterface & Node & {
  readonly __typename?: 'Comment';
  readonly anchor: Scalars['String']['output'];
  readonly author: User;
  readonly canBeLiked: Scalars['Boolean']['output'];
  readonly canBeUpdated: Scalars['Boolean']['output'];
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly contentSummaryHtml: Scalars['String']['output'];
  readonly contentUpdatedAt: Scalars['DateTime']['output'];
  readonly contributors: UserConnection;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly editedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isEdited: Scalars['Boolean']['output'];
  readonly isLikedByCurrentUser: Scalars['Boolean']['output'];
  readonly likers: UserConnection;
  readonly path: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly replies: CommentReplyConnection;
  readonly updatedAt: Scalars['DateTime']['output'];
};


export type CommentContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContributorOrder>;
};


export type CommentLikersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentConnection = {
  readonly __typename?: 'CommentConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<CommentEdge>>>;
  readonly nodes: ReadonlyArray<Comment>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type CommentEdge = {
  readonly __typename?: 'CommentEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<Comment>;
};

export type CommentInterface = {
  readonly anchor: Scalars['String']['output'];
  readonly author: User;
  readonly canBeLiked: Scalars['Boolean']['output'];
  readonly canBeUpdated: Scalars['Boolean']['output'];
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly contentSummaryHtml: Scalars['String']['output'];
  readonly contentUpdatedAt: Scalars['DateTime']['output'];
  readonly contributors: UserConnection;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly editedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isEdited: Scalars['Boolean']['output'];
  readonly isLikedByCurrentUser: Scalars['Boolean']['output'];
  readonly likers: UserConnection;
  readonly path: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly replies: CommentReplyConnection;
  readonly updatedAt: Scalars['DateTime']['output'];
};


export type CommentInterfaceContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContributorOrder>;
};


export type CommentInterfaceLikersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommentInterfaceRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentReply = Node & {
  readonly __typename?: 'CommentReply';
  readonly anchor: Scalars['String']['output'];
  readonly author: User;
  readonly canBeLiked: Scalars['Boolean']['output'];
  readonly canBeUpdated: Scalars['Boolean']['output'];
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly contentSummaryHtml: Scalars['String']['output'];
  readonly contentUpdatedAt: Scalars['DateTime']['output'];
  readonly contributors: UserConnection;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly editedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isEdited: Scalars['Boolean']['output'];
  readonly isLikedByCurrentUser: Scalars['Boolean']['output'];
  readonly likers: UserConnection;
  readonly path: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Scalars['DateTime']['output'];
};


export type CommentReplyContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContributorOrder>;
};


export type CommentReplyLikersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentReplyConnection = {
  readonly __typename?: 'CommentReplyConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<CommentReplyEdge>>>;
  readonly nodes: ReadonlyArray<CommentReply>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type CommentReplyEdge = {
  readonly __typename?: 'CommentReplyEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<CommentReply>;
};

export type ContributorInput = {
  readonly account: Scalars['String']['input'];
  readonly joinOrder: Scalars['Int']['input'];
};

export type ContributorOrder = {
  readonly direction?: InputMaybe<OrderDirection>;
  readonly field?: InputMaybe<ContributorOrderField>;
};

export enum ContributorOrderField {
  ContributedAt = 'CONTRIBUTED_AT'
}

export type CreateAccessTokenInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly scopes: ReadonlyArray<AccessTokenScope>;
  readonly title: Scalars['String']['input'];
};

export type CreateAccessTokenPayload = {
  readonly __typename?: 'CreateAccessTokenPayload';
  readonly accessToken: AccessToken;
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateAiReviewInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly content: Scalars['String']['input'];
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAiReviewPayload = {
  readonly __typename?: 'CreateAiReviewPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
};

export type CreateCommentInput = {
  readonly authorId?: InputMaybe<Scalars['ID']['input']>;
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly commentableId: Scalars['ID']['input'];
  readonly content: Scalars['String']['input'];
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCommentPayload = {
  readonly __typename?: 'CreateCommentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly comment: Comment;
};

export type CreateCommentReplyInput = {
  readonly authorId?: InputMaybe<Scalars['ID']['input']>;
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly commentId: Scalars['ID']['input'];
  readonly content: Scalars['String']['input'];
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCommentReplyPayload = {
  readonly __typename?: 'CreateCommentReplyPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly reply: CommentReply;
};

export type CreateCustomEmojiInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly emojiCode: Scalars['String']['input'];
  readonly imageDataUrl: Scalars['String']['input'];
};

export type CreateCustomEmojiPayload = {
  readonly __typename?: 'CreateCustomEmojiPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly customEmoji: CustomEmoji;
};

export type CreateDisabledUserInput = {
  readonly account: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly email: Scalars['String']['input'];
  readonly realName: Scalars['String']['input'];
  readonly role?: InputMaybe<Role>;
};

export type CreateDisabledUserPayload = {
  readonly __typename?: 'CreateDisabledUserPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly user: User;
};

export type CreateFolderInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly folder?: InputMaybe<FolderInput>;
};

export type CreateFolderPayload = {
  readonly __typename?: 'CreateFolderPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folder: Folder;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
};

export type CreateFolderPinInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly folder?: InputMaybe<FolderInput>;
  readonly noteId: Scalars['ID']['input'];
};

export type CreateFolderPinPayload = {
  readonly __typename?: 'CreateFolderPinPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folder: Folder;
};

export type CreateGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly coverImageKey?: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly isPrivate: Scalars['Boolean']['input'];
  readonly name: Scalars['String']['input'];
};

export type CreateGroupPayload = {
  readonly __typename?: 'CreateGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type CreateGroupPinInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
  readonly noteId: Scalars['ID']['input'];
};

export type CreateGroupPinPayload = {
  readonly __typename?: 'CreateGroupPinPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type CreateInlineCommentInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly content: Scalars['String']['input'];
  readonly endInText: Scalars['Int']['input'];
  readonly noteContent: Scalars['ID']['input'];
  readonly noteId: Scalars['ID']['input'];
  readonly selectedText: Scalars['String']['input'];
  readonly startInText: Scalars['Int']['input'];
};

export type CreateInlineCommentPayload = {
  readonly __typename?: 'CreateInlineCommentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly comment: InlineComment;
};

export type CreateNoteInput = {
  readonly authorId?: InputMaybe<Scalars['ID']['input']>;
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly coediting: Scalars['Boolean']['input'];
  readonly content: Scalars['String']['input'];
  readonly draft?: InputMaybe<Scalars['Boolean']['input']>;
  readonly folders?: InputMaybe<ReadonlyArray<FolderInput>>;
  readonly groupIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: Scalars['String']['input'];
};

export type CreateNotePayload = {
  readonly __typename?: 'CreateNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type CreateNoteTemplateInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly coediting: Scalars['Boolean']['input'];
  readonly content: Scalars['String']['input'];
  readonly folders?: InputMaybe<ReadonlyArray<FolderInput>>;
  readonly groupIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly name: Scalars['String']['input'];
  readonly title: Scalars['String']['input'];
};

export type CreateNoteTemplatePayload = {
  readonly __typename?: 'CreateNoteTemplatePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly noteTemplate: NoteTemplate;
};

export type CreateReviewableDraftCommentInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly content: Scalars['String']['input'];
  readonly reviewableDraftId: Scalars['ID']['input'];
};

export type CreateReviewableDraftCommentPayload = {
  readonly __typename?: 'CreateReviewableDraftCommentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly comment: ReviewableDraftComment;
};

export type CreateSummaryNoteInput = {
  readonly authorEmail: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly content: Scalars['String']['input'];
  readonly draft?: InputMaybe<Scalars['Boolean']['input']>;
  readonly endContent?: InputMaybe<Scalars['String']['input']>;
  readonly folders?: InputMaybe<ReadonlyArray<FolderInput>>;
  readonly preContent?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly slackChannelId: Scalars['String']['input'];
  readonly slackThreadTs: Scalars['String']['input'];
};

export type CreateSummaryNotePayload = {
  readonly __typename?: 'CreateSummaryNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type CreateSynonymGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly words: ReadonlyArray<Scalars['String']['input']>;
};

export type CreateSynonymGroupPayload = {
  readonly __typename?: 'CreateSynonymGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CustomEmoji = Node & {
  readonly __typename?: 'CustomEmoji';
  readonly createUser: User;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly emojiCode: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly imageUrl: Scalars['String']['output'];
};

export type CustomEmojiConnection = {
  readonly __typename?: 'CustomEmojiConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<CustomEmojiEdge>>>;
  readonly nodes: ReadonlyArray<CustomEmoji>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type CustomEmojiEdge = {
  readonly __typename?: 'CustomEmojiEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<CustomEmoji>;
};

export type Dashboard = Node & {
  readonly __typename?: 'Dashboard';
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly createdAt: Scalars['DateTime']['output'];
  readonly group: Group;
  readonly id: Scalars['ID']['output'];
  readonly seqNumber: Scalars['Int']['output'];
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type DeleteAttachmentFilesInput = {
  readonly attachmentIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAttachmentFilesPayload = {
  readonly __typename?: 'DeleteAttachmentFilesPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteAttachmentInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DeleteAttachmentPayload = {
  readonly __typename?: 'DeleteAttachmentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteCommentInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DeleteCommentPayload = {
  readonly __typename?: 'DeleteCommentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteCommentReplyInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DeleteCommentReplyPayload = {
  readonly __typename?: 'DeleteCommentReplyPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteCustomEmojiInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly customEmojiId: Scalars['ID']['input'];
};

export type DeleteCustomEmojiPayload = {
  readonly __typename?: 'DeleteCustomEmojiPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteNoteInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DeleteNotePayload = {
  readonly __typename?: 'DeleteNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteNoteVersionInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DeleteNoteVersionPayload = {
  readonly __typename?: 'DeleteNoteVersionPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteSynonymGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DeleteSynonymGroupPayload = {
  readonly __typename?: 'DeleteSynonymGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DetachNoteFromFolderInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly folder: FolderInput;
  readonly noteId: Scalars['ID']['input'];
};

export type DetachNoteFromFolderPayload = {
  readonly __typename?: 'DetachNoteFromFolderPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly detachedFolder: Folder;
  readonly note: Note;
};

export type DisableCollabModeStartDialogInput = {
  readonly account: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly userId?: InputMaybe<Scalars['ID']['input']>;
};

export type DisableCollabModeStartDialogPayload = {
  readonly __typename?: 'DisableCollabModeStartDialogPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly user: User;
};

export type DisableDraftReviewInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly noteId: Scalars['ID']['input'];
};

export type DisableDraftReviewPayload = {
  readonly __typename?: 'DisableDraftReviewPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly reviewableDraft: ReviewableDraft;
};

export type DisableOutgoingWebhookInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DisableOutgoingWebhookPayload = {
  readonly __typename?: 'DisableOutgoingWebhookPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly outgoingWebhook: OutgoingWebhook;
};

export type DisableSharedNoteCommentsFeatureInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DisableSharedNoteCommentsFeaturePayload = {
  readonly __typename?: 'DisableSharedNoteCommentsFeaturePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DisableSharedNotesFeatureInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DisableSharedNotesFeaturePayload = {
  readonly __typename?: 'DisableSharedNotesFeaturePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DisableUserInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type DisableUserPayload = {
  readonly __typename?: 'DisableUserPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DisableUsersInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly ids: ReadonlyArray<Scalars['ID']['input']>;
};

export type DisableUsersPayload = {
  readonly __typename?: 'DisableUsersPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EnableCollabModeStartDialogInput = {
  readonly account: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly userId?: InputMaybe<Scalars['ID']['input']>;
};

export type EnableCollabModeStartDialogPayload = {
  readonly __typename?: 'EnableCollabModeStartDialogPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly user: User;
};

export type EnableDraftReviewInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly noteId: Scalars['ID']['input'];
};

export type EnableDraftReviewPayload = {
  readonly __typename?: 'EnableDraftReviewPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly reviewableDraft: ReviewableDraft;
};

export type EnableOutgoingWebhookInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type EnableOutgoingWebhookPayload = {
  readonly __typename?: 'EnableOutgoingWebhookPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly outgoingWebhook: OutgoingWebhook;
};

export type EnableSharedNoteCommentsFeatureInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EnableSharedNoteCommentsFeaturePayload = {
  readonly __typename?: 'EnableSharedNoteCommentsFeaturePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EnableSharedNotesFeatureInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EnableSharedNotesFeaturePayload = {
  readonly __typename?: 'EnableSharedNotesFeaturePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ExternalUrlData = {
  readonly __typename?: 'ExternalUrlData';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly favicon?: Maybe<Scalars['String']['output']>;
  readonly og?: Maybe<OpenGraph>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type ExtractNoteTextSelectionMarkdownRangesInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly noteContent: Scalars['String']['input'];
  readonly noteTextSelections: ReadonlyArray<NoteTextSelectionInput>;
};

export type ExtractNoteTextSelectionMarkdownRangesPayload = {
  readonly __typename?: 'ExtractNoteTextSelectionMarkdownRangesPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly noteTextSelections: NoteTextSelectionConnection;
};


export type ExtractNoteTextSelectionMarkdownRangesPayloadNoteTextSelectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ExtractNoteTextSelectionTextRangesInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly noteContent: Scalars['String']['input'];
  readonly noteTextSelections: ReadonlyArray<NoteTextSelectionInput>;
};

export type ExtractNoteTextSelectionTextRangesPayload = {
  readonly __typename?: 'ExtractNoteTextSelectionTextRangesPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly noteTextSelections: NoteTextSelectionConnection;
};


export type ExtractNoteTextSelectionTextRangesPayloadNoteTextSelectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type FeedFolderParcel = {
  readonly __typename?: 'FeedFolderParcel';
  readonly date: Scalars['DateTime']['output'];
  readonly folder: Folder;
  readonly notes: NoteConnection;
};


export type FeedFolderParcelNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum FeedKind {
  All = 'ALL',
  Group = 'GROUP',
  MyFeed = 'MY_FEED'
}

export enum FeedKindWithoutGroup {
  All = 'ALL',
  MyFeed = 'MY_FEED'
}

export type FeedNote = {
  readonly __typename?: 'FeedNote';
  readonly date: Scalars['DateTime']['output'];
  readonly note: Note;
};

export type FeedSection = FeedFolderParcel | FeedNote | FeedUserParcel;

export type FeedSectionSimpleConnection = {
  readonly __typename?: 'FeedSectionSimpleConnection';
  readonly edges: ReadonlyArray<FeedSectionSimpleEdge>;
  readonly pageInfo: FeedSectionSimplePageInfo;
};

export type FeedSectionSimpleEdge = {
  readonly __typename?: 'FeedSectionSimpleEdge';
  readonly node: FeedSection;
};

export type FeedSectionSimplePageInfo = {
  readonly __typename?: 'FeedSectionSimplePageInfo';
  readonly endCursor: Scalars['String']['output'];
  readonly hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};

export type FeedUserParcel = {
  readonly __typename?: 'FeedUserParcel';
  readonly date: Scalars['DateTime']['output'];
  readonly notes: NoteConnection;
  readonly user: User;
};


export type FeedUserParcelNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Folder = Node & {
  readonly __typename?: 'Folder';
  readonly activeChildrenCount: Scalars['Int']['output'];
  readonly aliveNotesCount: Scalars['Int']['output'];
  readonly alivePinnedNotesCount: Scalars['Int']['output'];
  readonly archivedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly canBeManaged: Scalars['Boolean']['output'];
  readonly components: ReadonlyArray<Folder>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly descendantNotes: NoteConnection;
  readonly fixedPath: Scalars['String']['output'];
  readonly folders: FolderConnection;
  readonly fullName: Scalars['String']['output'];
  readonly group: Group;
  readonly id: Scalars['ID']['output'];
  readonly lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly newNotePath: Scalars['String']['output'];
  readonly notes: NoteConnection;
  readonly parent?: Maybe<Folder>;
  readonly path: Scalars['String']['output'];
  readonly pinnedNotes: NoteConnection;
  readonly unarchivableDescendantNoteTitles: ReadonlyArray<Scalars['String']['output']>;
  readonly unarchivableDescendantNotes: NoteConnection;
  readonly updatedAt: Scalars['DateTime']['output'];
};


export type FolderDescendantNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FolderFoldersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FolderNotesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  onlyCoediting?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<NoteOrder>;
};


export type FolderPinnedNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FolderUnarchivableDescendantNoteTitlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type FolderUnarchivableDescendantNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type FolderConnection = {
  readonly __typename?: 'FolderConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<FolderEdge>>>;
  readonly nodes: ReadonlyArray<Folder>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type FolderEdge = {
  readonly __typename?: 'FolderEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<Folder>;
};

export type FolderInput = {
  readonly folderName: Scalars['String']['input'];
  readonly groupId: Scalars['ID']['input'];
};

export type Group = Node & {
  readonly __typename?: 'Group';
  readonly archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated This field will be replaced with canBeJoinedBySelf */
  readonly canBeJoined: Scalars['Boolean']['output'];
  readonly canBeJoinedBySelf: Scalars['Boolean']['output'];
  readonly canBeManaged: Scalars['Boolean']['output'];
  readonly coverImage: GroupCoverImage;
  readonly coverImageKey?: Maybe<Scalars['String']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly dashboards: ReadonlyArray<Dashboard>;
  /** @deprecated Provided only for legacy frontend. */
  readonly databaseId: Scalars['Int']['output'];
  readonly description: Scalars['String']['output'];
  readonly feedUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly folders: FolderConnection;
  readonly id: Scalars['ID']['output'];
  readonly isArchived: Scalars['Boolean']['output'];
  readonly isDefault: Scalars['Boolean']['output'];
  readonly isJoined: Scalars['Boolean']['output'];
  readonly isPrivate: Scalars['Boolean']['output'];
  readonly isVisibilityChangeable: Scalars['Boolean']['output'];
  readonly name: Scalars['String']['output'];
  readonly notes: NoteConnection;
  readonly path: Scalars['String']['output'];
  readonly pinnedNotes: ReadonlyArray<Note>;
  readonly todayContributors: UserConnection;
  readonly trendNotes: NoteConnection;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly users: UserConnection;
};


export type GroupCoverImageArgs = {
  density: Scalars['Int']['input'];
  size: GroupCoverImageSize;
};


export type GroupFoldersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
  parentFolderIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  withChildren?: InputMaybe<Scalars['Boolean']['input']>;
};


export type GroupNotesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  onlyNotAttachedFolder?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<NoteOrder>;
};


export type GroupTodayContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type GroupTrendNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type GroupUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum GroupAbility {
  AssociationManageable = 'ASSOCIATION_MANAGEABLE',
  Readable = 'READABLE'
}

export type GroupConnection = {
  readonly __typename?: 'GroupConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<GroupEdge>>>;
  readonly nodes: ReadonlyArray<Group>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type GroupCoverImage = {
  readonly __typename?: 'GroupCoverImage';
  readonly density: Scalars['Int']['output'];
  readonly height: Scalars['Int']['output'];
  readonly url: Scalars['String']['output'];
  readonly width: Scalars['Int']['output'];
};

export enum GroupCoverImageSize {
  Large = 'LARGE',
  Medium = 'MEDIUM'
}

export type GroupEdge = {
  readonly __typename?: 'GroupEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<Group>;
};

export type HealthCheckedPayload = {
  readonly __typename?: 'HealthCheckedPayload';
  readonly status: Scalars['String']['output'];
};

export type IgnoreMultiFactorAuthnForMultipleUsersInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly userIds: ReadonlyArray<Scalars['ID']['input']>;
};

export type IgnoreMultiFactorAuthnForMultipleUsersPayload = {
  readonly __typename?: 'IgnoreMultiFactorAuthnForMultipleUsersPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type IgnoreMultiFactorAuthnInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly userId: Scalars['ID']['input'];
};

export type IgnoreMultiFactorAuthnPayload = {
  readonly __typename?: 'IgnoreMultiFactorAuthnPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ImportableUser = {
  readonly __typename?: 'ImportableUser';
  readonly account: Scalars['String']['output'];
  readonly avatarUrl: Scalars['String']['output'];
  readonly realName: Scalars['String']['output'];
};

export type InlineComment = CommentInterface & Node & {
  readonly __typename?: 'InlineComment';
  readonly anchor: Scalars['String']['output'];
  readonly author: User;
  readonly canBeLiked: Scalars['Boolean']['output'];
  readonly canBeUpdated: Scalars['Boolean']['output'];
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly contentSummaryHtml: Scalars['String']['output'];
  readonly contentUpdatedAt: Scalars['DateTime']['output'];
  readonly contributors: UserConnection;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly editedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isEdited: Scalars['Boolean']['output'];
  readonly isLikedByCurrentUser: Scalars['Boolean']['output'];
  readonly likers: UserConnection;
  readonly noteTextSelection?: Maybe<NoteTextSelection>;
  readonly path: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly replies: CommentReplyConnection;
  readonly updatedAt: Scalars['DateTime']['output'];
};


export type InlineCommentContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContributorOrder>;
};


export type InlineCommentLikersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InlineCommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type InlineCommentConnection = {
  readonly __typename?: 'InlineCommentConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<InlineCommentEdge>>>;
  readonly nodes: ReadonlyArray<InlineComment>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type InlineCommentEdge = {
  readonly __typename?: 'InlineCommentEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<InlineComment>;
};

export type InternalUrlData = {
  readonly __typename?: 'InternalUrlData';
  readonly avatar1xUrl?: Maybe<Scalars['String']['output']>;
  readonly avatar2xUrl?: Maybe<Scalars['String']['output']>;
  readonly isCoediting?: Maybe<Scalars['Boolean']['output']>;
  readonly linkType: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export enum InvitationHint {
  AlreadyJoined = 'ALREADY_JOINED',
  Invited = 'INVITED',
  ReEnabled = 'RE_ENABLED'
}

export type InviteInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly email: Scalars['String']['input'];
  readonly groupIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly message?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Role>;
};

export type InvitePayload = {
  readonly __typename?: 'InvitePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly email: Scalars['String']['output'];
  readonly hint: InvitationHint;
  readonly role: Role;
};

export type JoinGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
  readonly userId: Scalars['ID']['input'];
};

export type JoinGroupPayload = {
  readonly __typename?: 'JoinGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type LeaveGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
  readonly userId: Scalars['ID']['input'];
};

export type LeaveGroupPayload = {
  readonly __typename?: 'LeaveGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type LikeInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly likableId: Scalars['ID']['input'];
};

export type LikePayload = {
  readonly __typename?: 'LikePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly likers: UserConnection;
};


export type LikePayloadLikersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum MainPurpose {
  Announcements = 'ANNOUNCEMENTS',
  Communication = 'COMMUNICATION',
  Knowledge = 'KNOWLEDGE',
  Manual = 'MANUAL',
  Others = 'OTHERS',
  Portal = 'PORTAL'
}

export type MarkNotificationsAsReadInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type MarkNotificationsAsReadPayload = {
  readonly __typename?: 'MarkNotificationsAsReadPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type MarkServiceNotificationsAsReadInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly serviceNotificationIds: ReadonlyArray<Scalars['ID']['input']>;
};

export type MarkServiceNotificationsAsReadPayload = {
  readonly __typename?: 'MarkServiceNotificationsAsReadPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type MoveNoteToAnotherFolderInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly fromFolder: FolderInput;
  readonly noteId: Scalars['ID']['input'];
  readonly toFolder: FolderInput;
};

export type MoveNoteToAnotherFolderPayload = {
  readonly __typename?: 'MoveNoteToAnotherFolderPayload';
  readonly afterFolder: Folder;
  readonly beforeFolder?: Maybe<Folder>;
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
  readonly note: Note;
};

export type MoveNoteToAnotherGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly fromFolderId?: InputMaybe<Scalars['ID']['input']>;
  readonly fromGroupId: Scalars['ID']['input'];
  readonly noteId: Scalars['ID']['input'];
  readonly toGroupId: Scalars['ID']['input'];
};

export type MoveNoteToAnotherGroupPayload = {
  readonly __typename?: 'MoveNoteToAnotherGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly archiveFolder: ArchiveFolderPayload;
  readonly archiveFolders: ArchiveFoldersPayload;
  readonly archiveGroup: ArchiveGroupPayload;
  readonly archiveNote: ArchiveNotePayload;
  readonly archiveNotes: ArchiveNotesPayload;
  readonly attachNoteToFolder: AttachNoteToFolderPayload;
  readonly closeAnnouncement: CloseAnnouncementPayload;
  readonly createAccessToken: CreateAccessTokenPayload;
  readonly createAiReview: CreateAiReviewPayload;
  readonly createComment: CreateCommentPayload;
  readonly createCommentReply: CreateCommentReplyPayload;
  readonly createCustomEmoji: CreateCustomEmojiPayload;
  readonly createDisabledUser: CreateDisabledUserPayload;
  readonly createFolder: CreateFolderPayload;
  readonly createFolderPin: CreateFolderPinPayload;
  readonly createGroup: CreateGroupPayload;
  readonly createGroupPin: CreateGroupPinPayload;
  readonly createInlineComment: CreateInlineCommentPayload;
  readonly createNote: CreateNotePayload;
  readonly createNoteTemplate: CreateNoteTemplatePayload;
  readonly createReviewableDraftComment: CreateReviewableDraftCommentPayload;
  readonly createSummaryNote: CreateSummaryNotePayload;
  readonly createSynonymGroup: CreateSynonymGroupPayload;
  /** @deprecated This feature is for internal use only. */
  readonly deleteAttachment: DeleteAttachmentPayload;
  readonly deleteAttachmentFiles: DeleteAttachmentFilesPayload;
  readonly deleteComment: DeleteCommentPayload;
  readonly deleteCommentReply: DeleteCommentReplyPayload;
  readonly deleteCustomEmoji: DeleteCustomEmojiPayload;
  readonly deleteNote: DeleteNotePayload;
  readonly deleteNoteVersion: DeleteNoteVersionPayload;
  readonly deleteSynonymGroup: DeleteSynonymGroupPayload;
  readonly detachNoteFromFolder: DetachNoteFromFolderPayload;
  readonly disableCollabModeStartDialog: DisableCollabModeStartDialogPayload;
  readonly disableDraftReview: DisableDraftReviewPayload;
  readonly disableOutgoingWebhook: DisableOutgoingWebhookPayload;
  readonly disableSharedNoteCommentsFeature: DisableSharedNoteCommentsFeaturePayload;
  readonly disableSharedNotesFeature: DisableSharedNotesFeaturePayload;
  readonly disableUser: DisableUserPayload;
  readonly disableUsers: DisableUsersPayload;
  readonly enableCollabModeStartDialog: EnableCollabModeStartDialogPayload;
  readonly enableDraftReview: EnableDraftReviewPayload;
  readonly enableOutgoingWebhook: EnableOutgoingWebhookPayload;
  readonly enableSharedNoteCommentsFeature: EnableSharedNoteCommentsFeaturePayload;
  readonly enableSharedNotesFeature: EnableSharedNotesFeaturePayload;
  readonly extractNoteTextSelectionMarkdownRanges: ExtractNoteTextSelectionMarkdownRangesPayload;
  readonly extractNoteTextSelectionTextRanges: ExtractNoteTextSelectionTextRangesPayload;
  readonly ignoreMultiFactorAuthn: IgnoreMultiFactorAuthnPayload;
  readonly ignoreMultiFactorAuthnForMultipleUsers: IgnoreMultiFactorAuthnForMultipleUsersPayload;
  readonly invite: InvitePayload;
  readonly joinGroup: JoinGroupPayload;
  readonly leaveGroup: LeaveGroupPayload;
  readonly like: LikePayload;
  readonly markNotificationsAsRead: MarkNotificationsAsReadPayload;
  readonly markServiceNotificationsAsRead: MarkServiceNotificationsAsReadPayload;
  readonly moveNoteToAnotherFolder: MoveNoteToAnotherFolderPayload;
  readonly moveNoteToAnotherGroup: MoveNoteToAnotherGroupPayload;
  readonly removeFolderPin: RemoveFolderPinPayload;
  readonly removeGroupPin: RemoveGroupPinPayload;
  readonly requestAttachmentConversion: RequestAttachmentConversionPayload;
  readonly restoreFolder: RestoreFolderPayload;
  readonly restoreGroup: RestoreGroupPayload;
  readonly restoreNote: RestoreNotePayload;
  readonly revokeAccessToken: RevokeAccessTokenPayload;
  readonly setFeedToHome: SetFeedToHomePayload;
  readonly setGroupToHome: SetGroupToHomePayload;
  readonly shareNoteWithOutsideOfTeam: ShareNoteWithOutsideOfTeamPayload;
  readonly sortGroupPins: SortGroupPinsPayload;
  /** @deprecated This is beta and internal feature. */
  readonly syncUserLastUsedEditor: SyncUserLastUsedEditorPayload;
  readonly transferGroupNotes: TransferGroupNotesPayload;
  readonly unlike: UnlikePayload;
  readonly unshareNoteWithOutsideOfTeam: UnshareNoteWithOutsideOfTeamPayload;
  readonly unwatchNote: UnwatchNotePayload;
  readonly updateAccessToken: UpdateAccessTokenPayload;
  readonly updateComment: UpdateCommentPayload;
  readonly updateCommentReply: UpdateCommentReplyPayload;
  readonly updateDashboard: UpdateDashboardPayload;
  readonly updateDashboardContent: UpdateDashboardContentPayload;
  readonly updateFolderName: UpdateFolderNamePayload;
  readonly updateFolderParent: UpdateFolderParentPayload;
  readonly updateGroup: UpdateGroupPayload;
  readonly updateNote: UpdateNotePayload;
  readonly updateNoteContent: UpdateNoteContentPayload;
  readonly updateNoteGroups: UpdateNoteGroupsPayload;
  readonly updateNoteTemplate: UpdateNoteTemplatePayload;
  readonly updateNoteTitle: UpdateNoteTitlePayload;
  readonly updateSaml2SsoSetting: UpdateSaml2SsoSettingPayload;
  readonly updateSummaryNote: UpdateSummaryNotePayload;
  readonly updateSynonymGroup: UpdateSynonymGroupPayload;
  readonly updateTeamSetting: UpdateTeamSettingPayload;
  readonly updateUserNotificationSetting: UpdateUserNotificationSettingPayload;
  readonly updateUsersGroups: UpdateUsersGroupsPayload;
  readonly uploadAttachment: UploadAttachmentPayload;
  readonly uploadAttachmentWithDataUrl: UploadAttachmentWithDataUrlPayload;
  readonly watchNote: WatchNotePayload;
};


export type MutationArchiveFolderArgs = {
  input: ArchiveFolderInput;
};


export type MutationArchiveFoldersArgs = {
  input: ArchiveFoldersInput;
};


export type MutationArchiveGroupArgs = {
  input: ArchiveGroupInput;
};


export type MutationArchiveNoteArgs = {
  input: ArchiveNoteInput;
};


export type MutationArchiveNotesArgs = {
  input: ArchiveNotesInput;
};


export type MutationAttachNoteToFolderArgs = {
  input: AttachNoteToFolderInput;
};


export type MutationCloseAnnouncementArgs = {
  input: CloseAnnouncementInput;
};


export type MutationCreateAccessTokenArgs = {
  input: CreateAccessTokenInput;
};


export type MutationCreateAiReviewArgs = {
  input: CreateAiReviewInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateCommentReplyArgs = {
  input: CreateCommentReplyInput;
};


export type MutationCreateCustomEmojiArgs = {
  input: CreateCustomEmojiInput;
};


export type MutationCreateDisabledUserArgs = {
  input: CreateDisabledUserInput;
};


export type MutationCreateFolderArgs = {
  input: CreateFolderInput;
};


export type MutationCreateFolderPinArgs = {
  input: CreateFolderPinInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateGroupPinArgs = {
  input: CreateGroupPinInput;
};


export type MutationCreateInlineCommentArgs = {
  input: CreateInlineCommentInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateNoteTemplateArgs = {
  input: CreateNoteTemplateInput;
};


export type MutationCreateReviewableDraftCommentArgs = {
  input: CreateReviewableDraftCommentInput;
};


export type MutationCreateSummaryNoteArgs = {
  input: CreateSummaryNoteInput;
};


export type MutationCreateSynonymGroupArgs = {
  input: CreateSynonymGroupInput;
};


export type MutationDeleteAttachmentArgs = {
  input: DeleteAttachmentInput;
};


export type MutationDeleteAttachmentFilesArgs = {
  input: DeleteAttachmentFilesInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteCommentReplyArgs = {
  input: DeleteCommentReplyInput;
};


export type MutationDeleteCustomEmojiArgs = {
  input: DeleteCustomEmojiInput;
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


export type MutationDeleteNoteVersionArgs = {
  input: DeleteNoteVersionInput;
};


export type MutationDeleteSynonymGroupArgs = {
  input: DeleteSynonymGroupInput;
};


export type MutationDetachNoteFromFolderArgs = {
  input: DetachNoteFromFolderInput;
};


export type MutationDisableCollabModeStartDialogArgs = {
  input: DisableCollabModeStartDialogInput;
};


export type MutationDisableDraftReviewArgs = {
  input: DisableDraftReviewInput;
};


export type MutationDisableOutgoingWebhookArgs = {
  input: DisableOutgoingWebhookInput;
};


export type MutationDisableSharedNoteCommentsFeatureArgs = {
  input: DisableSharedNoteCommentsFeatureInput;
};


export type MutationDisableSharedNotesFeatureArgs = {
  input: DisableSharedNotesFeatureInput;
};


export type MutationDisableUserArgs = {
  input: DisableUserInput;
};


export type MutationDisableUsersArgs = {
  input: DisableUsersInput;
};


export type MutationEnableCollabModeStartDialogArgs = {
  input: EnableCollabModeStartDialogInput;
};


export type MutationEnableDraftReviewArgs = {
  input: EnableDraftReviewInput;
};


export type MutationEnableOutgoingWebhookArgs = {
  input: EnableOutgoingWebhookInput;
};


export type MutationEnableSharedNoteCommentsFeatureArgs = {
  input: EnableSharedNoteCommentsFeatureInput;
};


export type MutationEnableSharedNotesFeatureArgs = {
  input: EnableSharedNotesFeatureInput;
};


export type MutationExtractNoteTextSelectionMarkdownRangesArgs = {
  input: ExtractNoteTextSelectionMarkdownRangesInput;
};


export type MutationExtractNoteTextSelectionTextRangesArgs = {
  input: ExtractNoteTextSelectionTextRangesInput;
};


export type MutationIgnoreMultiFactorAuthnArgs = {
  input: IgnoreMultiFactorAuthnInput;
};


export type MutationIgnoreMultiFactorAuthnForMultipleUsersArgs = {
  input: IgnoreMultiFactorAuthnForMultipleUsersInput;
};


export type MutationInviteArgs = {
  input: InviteInput;
};


export type MutationJoinGroupArgs = {
  input: JoinGroupInput;
};


export type MutationLeaveGroupArgs = {
  input: LeaveGroupInput;
};


export type MutationLikeArgs = {
  input: LikeInput;
};


export type MutationMarkNotificationsAsReadArgs = {
  input: MarkNotificationsAsReadInput;
};


export type MutationMarkServiceNotificationsAsReadArgs = {
  input: MarkServiceNotificationsAsReadInput;
};


export type MutationMoveNoteToAnotherFolderArgs = {
  input: MoveNoteToAnotherFolderInput;
};


export type MutationMoveNoteToAnotherGroupArgs = {
  input: MoveNoteToAnotherGroupInput;
};


export type MutationRemoveFolderPinArgs = {
  input: RemoveFolderPinInput;
};


export type MutationRemoveGroupPinArgs = {
  input: RemoveGroupPinInput;
};


export type MutationRequestAttachmentConversionArgs = {
  input: RequestAttachmentConversionInput;
};


export type MutationRestoreFolderArgs = {
  input: RestoreFolderInput;
};


export type MutationRestoreGroupArgs = {
  input: RestoreGroupInput;
};


export type MutationRestoreNoteArgs = {
  input: RestoreNoteInput;
};


export type MutationRevokeAccessTokenArgs = {
  input: RevokeAccessTokenInput;
};


export type MutationSetFeedToHomeArgs = {
  input: SetFeedToHomeInput;
};


export type MutationSetGroupToHomeArgs = {
  input: SetGroupToHomeInput;
};


export type MutationShareNoteWithOutsideOfTeamArgs = {
  input: ShareNoteWithOutsideOfTeamInput;
};


export type MutationSortGroupPinsArgs = {
  input: SortGroupPinsInput;
};


export type MutationSyncUserLastUsedEditorArgs = {
  input: SyncUserLastUsedEditorInput;
};


export type MutationTransferGroupNotesArgs = {
  input: TransferGroupNotesInput;
};


export type MutationUnlikeArgs = {
  input: UnlikeInput;
};


export type MutationUnshareNoteWithOutsideOfTeamArgs = {
  input: UnshareNoteWithOutsideOfTeamInput;
};


export type MutationUnwatchNoteArgs = {
  input: UnwatchNoteInput;
};


export type MutationUpdateAccessTokenArgs = {
  input: UpdateAccessTokenInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateCommentReplyArgs = {
  input: UpdateCommentReplyInput;
};


export type MutationUpdateDashboardArgs = {
  input: UpdateDashboardInput;
};


export type MutationUpdateDashboardContentArgs = {
  input: UpdateDashboardContentInput;
};


export type MutationUpdateFolderNameArgs = {
  input: UpdateFolderNameInput;
};


export type MutationUpdateFolderParentArgs = {
  input: UpdateFolderParentInput;
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};


export type MutationUpdateNoteContentArgs = {
  input: UpdateNoteContentInput;
};


export type MutationUpdateNoteGroupsArgs = {
  input: UpdateNoteGroupsInput;
};


export type MutationUpdateNoteTemplateArgs = {
  input: UpdateNoteTemplateInput;
};


export type MutationUpdateNoteTitleArgs = {
  input: UpdateNoteTitleInput;
};


export type MutationUpdateSaml2SsoSettingArgs = {
  input: UpdateSaml2SsoSettingInput;
};


export type MutationUpdateSummaryNoteArgs = {
  input: UpdateSummaryNoteInput;
};


export type MutationUpdateSynonymGroupArgs = {
  input: UpdateSynonymGroupInput;
};


export type MutationUpdateTeamSettingArgs = {
  input: UpdateTeamSettingInput;
};


export type MutationUpdateUserNotificationSettingArgs = {
  input: UpdateUserNotificationSettingInput;
};


export type MutationUpdateUsersGroupsArgs = {
  input: UpdateUsersGroupsInput;
};


export type MutationUploadAttachmentArgs = {
  input: UploadAttachmentInput;
};


export type MutationUploadAttachmentWithDataUrlArgs = {
  input: UploadAttachmentWithDataUrlInput;
};


export type MutationWatchNoteArgs = {
  input: WatchNoteInput;
};

export type Node = {
  readonly id: Scalars['ID']['output'];
};

export type Note = Node & {
  readonly __typename?: 'Note';
  readonly attachments: AttachmentConnection;
  readonly author?: Maybe<User>;
  readonly canBeArchived: Scalars['Boolean']['output'];
  readonly canBeCommented: Scalars['Boolean']['output'];
  readonly canBeDestroyed: Scalars['Boolean']['output'];
  readonly canBeLiked: Scalars['Boolean']['output'];
  readonly canBeUpdated: Scalars['Boolean']['output'];
  /** @deprecated This is beta and internal feature. */
  readonly coeditRoom?: Maybe<CoeditRoom>;
  readonly coediting: Scalars['Boolean']['output'];
  readonly comments: CommentConnection;
  readonly commentsCount: Scalars['Int']['output'];
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly contentSummaryHtml: Scalars['String']['output'];
  readonly contentTocHtml: Scalars['String']['output'];
  readonly contentUpdatedAt: Scalars['DateTime']['output'];
  readonly contributors: UserConnection;
  readonly createdAt: Scalars['DateTime']['output'];
  /** @deprecated Provided only for legacy frontend. */
  readonly databaseId: Scalars['Int']['output'];
  readonly editPath: Scalars['String']['output'];
  /** @deprecated Note can now have multiple folders, use folders. */
  readonly folderName?: Maybe<Scalars['String']['output']>;
  readonly folders: FolderConnection;
  readonly groups: ReadonlyArray<Group>;
  readonly hasCollabHistory: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly inlineComments: InlineCommentConnection;
  readonly isArchived: Scalars['Boolean']['output'];
  readonly isLikedByCurrentUser: Scalars['Boolean']['output'];
  readonly likers: UserConnection;
  readonly path: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly relatedNotes: SearchResultConnection;
  readonly reviewableDraft?: Maybe<ReviewableDraft>;
  readonly selectableGroups: GroupConnection;
  readonly sharedNote?: Maybe<SharedNote>;
  readonly title: Scalars['String']['output'];
  readonly trackbackNotes: NoteConnection;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly url: Scalars['String']['output'];
};


export type NoteAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NoteCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NoteContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContributorOrder>;
};


export type NoteFoldersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NoteInlineCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NoteLikersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NoteRelatedNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NoteSelectableGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NoteTrackbackNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type NoteBrowsingHistory = Node & {
  readonly __typename?: 'NoteBrowsingHistory';
  readonly id: Scalars['ID']['output'];
  readonly note?: Maybe<Note>;
};

export type NoteBrowsingHistoryConnection = {
  readonly __typename?: 'NoteBrowsingHistoryConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<NoteBrowsingHistoryEdge>>>;
  readonly nodes: ReadonlyArray<NoteBrowsingHistory>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type NoteBrowsingHistoryEdge = {
  readonly __typename?: 'NoteBrowsingHistoryEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<NoteBrowsingHistory>;
};

export type NoteConnection = {
  readonly __typename?: 'NoteConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<NoteEdge>>>;
  readonly nodes: ReadonlyArray<Note>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type NoteEdge = {
  readonly __typename?: 'NoteEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<Note>;
};

export type NoteInput = {
  readonly coediting: Scalars['Boolean']['input'];
  readonly content: Scalars['String']['input'];
  readonly folders?: InputMaybe<ReadonlyArray<FolderInput>>;
  readonly groupIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly title: Scalars['String']['input'];
};

export type NoteOrder = {
  readonly direction?: InputMaybe<OrderDirection>;
  readonly field?: InputMaybe<NoteOrderField>;
};

export enum NoteOrderField {
  ContentUpdatedAt = 'CONTENT_UPDATED_AT',
  PublishedAt = 'PUBLISHED_AT',
  Title = 'TITLE'
}

export type NoteTemplate = Node & {
  readonly __typename?: 'NoteTemplate';
  readonly coediting: Scalars['Boolean']['output'];
  readonly content: Scalars['String']['output'];
  readonly createdAt: Scalars['DateTime']['output'];
  readonly evaluatedTitle: Scalars['String']['output'];
  readonly folders: ReadonlyArray<NoteTemplateFolder>;
  readonly groups: ReadonlyArray<Group>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type NoteTemplateConnection = {
  readonly __typename?: 'NoteTemplateConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<NoteTemplateEdge>>>;
  readonly nodes: ReadonlyArray<NoteTemplate>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type NoteTemplateEdge = {
  readonly __typename?: 'NoteTemplateEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<NoteTemplate>;
};

export type NoteTemplateFolder = Node & {
  readonly __typename?: 'NoteTemplateFolder';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly evaluatedFullName: Scalars['String']['output'];
  readonly fullName: Scalars['String']['output'];
  readonly group: Group;
  readonly id: Scalars['ID']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type NoteTextSelection = Node & {
  readonly __typename?: 'NoteTextSelection';
  readonly content: Scalars['String']['output'];
  readonly endColumnInMarkdown: Scalars['Int']['output'];
  readonly endInText: Scalars['Int']['output'];
  readonly endLineInMarkdown: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly startColumnInMarkdown: Scalars['Int']['output'];
  readonly startInText: Scalars['Int']['output'];
  readonly startLineInMarkdown: Scalars['Int']['output'];
};

export type NoteTextSelectionConnection = {
  readonly __typename?: 'NoteTextSelectionConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<NoteTextSelectionEdge>>>;
  readonly nodes: ReadonlyArray<NoteTextSelection>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type NoteTextSelectionEdge = {
  readonly __typename?: 'NoteTextSelectionEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<NoteTextSelection>;
};

export type NoteTextSelectionInput = {
  readonly deletedInEditor?: InputMaybe<Scalars['Boolean']['input']>;
  readonly endColumnInMarkdown?: InputMaybe<Scalars['Int']['input']>;
  readonly endInText?: InputMaybe<Scalars['Int']['input']>;
  readonly endLineInMarkdown?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly startColumnInMarkdown?: InputMaybe<Scalars['Int']['input']>;
  readonly startInText?: InputMaybe<Scalars['Int']['input']>;
  readonly startLineInMarkdown?: InputMaybe<Scalars['Int']['input']>;
};

export type Notification = Node & {
  readonly __typename?: 'Notification';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated This field is for internal use only. */
  readonly kind: Scalars['String']['output'];
  readonly messageHtml: Scalars['String']['output'];
  readonly sender: User;
  readonly sourcePath: Scalars['String']['output'];
  readonly state: NotificationState;
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type NotificationConnection = {
  readonly __typename?: 'NotificationConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<NotificationEdge>>>;
  readonly nodes: ReadonlyArray<Notification>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type NotificationEdge = {
  readonly __typename?: 'NotificationEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<Notification>;
};

export enum NotificationState {
  Read = 'READ',
  Unread = 'UNREAD'
}

export type OpenGraph = {
  readonly __typename?: 'OpenGraph';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<OpenGraphImage>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type OpenGraphImage = {
  readonly __typename?: 'OpenGraphImage';
  readonly alt?: Maybe<Scalars['String']['output']>;
  readonly height?: Maybe<Scalars['Int']['output']>;
  readonly secureUrl?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Int']['output']>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrganizationKind {
  Company = 'COMPANY',
  Other = 'OTHER',
  Personal = 'PERSONAL',
  Unknown = 'UNKNOWN'
}

export type OutgoingWebhook = Node & {
  readonly __typename?: 'OutgoingWebhook';
  readonly disabledAt?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly endCursor?: Maybe<Scalars['String']['output']>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  readonly startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly accessToken: AccessToken;
  readonly accessTokens: AccessTokenConnection;
  readonly archivedGroups: GroupConnection;
  readonly attachmentFromPath: Attachment;
  readonly budget: Budget;
  /** @deprecated This is beta and internal feature. */
  readonly coeditToken: Scalars['String']['output'];
  /** @deprecated This is an internal field. */
  readonly collabModeData?: Maybe<CollabModeData>;
  readonly comment: Comment;
  readonly currentUser: User;
  readonly customEmojiFromCode: CustomEmoji;
  readonly customEmojis: CustomEmojiConnection;
  /** @deprecated This is an internal feature. */
  readonly customEmojisCacheKey: Scalars['String']['output'];
  readonly defaultGroup?: Maybe<Group>;
  /** @deprecated This is beta and internal feature. */
  readonly externalUrlData: ExternalUrlData;
  readonly feedSections: FeedSectionSimpleConnection;
  readonly folder: Folder;
  readonly folderFromPath: Folder;
  readonly folders: FolderConnection;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
  readonly group: Group;
  readonly groups: GroupConnection;
  /** @deprecated This is an internal and deprecated field. */
  readonly importableUsers: ReadonlyArray<ImportableUser>;
  /** @deprecated This is beta and internal feature. */
  readonly internalUrlData?: Maybe<InternalUrlData>;
  readonly node?: Maybe<Node>;
  readonly nodes: ReadonlyArray<Maybe<Node>>;
  readonly note: Note;
  readonly noteBrowsingHistories: NoteBrowsingHistoryConnection;
  readonly noteFromPath: Note;
  readonly noteTemplate: NoteTemplate;
  readonly noteTemplates: NoteTemplateConnection;
  readonly notes: NoteConnection;
  readonly notifications: NotificationConnection;
  readonly renderMarkdownToHtml: Scalars['String']['output'];
  readonly reviewableDraft: ReviewableDraft;
  readonly search: SearchResultConnection;
  readonly searchFolder: SearchFolderResultConnection;
  readonly serviceNotifications: ServiceNotificationConnection;
  readonly sharedNote: SharedNote;
  readonly sharedNotes: SharedNoteConnection;
  readonly summaryNoteHistory?: Maybe<SummaryNoteHistory>;
  readonly synonymGroups: SynonymGroupConnection;
  readonly teamAccessTokenLogs: AccessTokenLogConnection;
  readonly user: User;
  readonly userFromAccount: User;
  readonly users: UserConnection;
  readonly usersFromAccounts: UserConnection;
  /** @deprecated This is internal feature. */
  readonly validateToMove: Scalars['Boolean']['output'];
};


export type QueryAccessTokenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccessTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryArchivedGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAttachmentFromPathArgs = {
  path: Scalars['String']['input'];
};


export type QueryCoeditTokenArgs = {
  noteId: Scalars['ID']['input'];
};


export type QueryCollabModeDataArgs = {
  noteId: Scalars['ID']['input'];
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomEmojiFromCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryCustomEmojisArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryExternalUrlDataArgs = {
  url: Scalars['String']['input'];
};


export type QueryFeedSectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  groupId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<FeedKind>;
};


export type QueryFolderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFolderFromPathArgs = {
  path: Scalars['String']['input'];
};


export type QueryFoldersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
  parentFolderIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupsArgs = {
  ability?: InputMaybe<GroupAbility>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryImportableUsersArgs = {
  encryptedAccessToken: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  serviceType: Scalars['String']['input'];
  teamName: Scalars['String']['input'];
};


export type QueryInternalUrlDataArgs = {
  url: Scalars['String']['input'];
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type QueryNoteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoteBrowsingHistoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNoteFromPathArgs = {
  path: Scalars['String']['input'];
};


export type QueryNoteTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoteTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNotesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteOrder>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<NotificationState>;
};


export type QueryRenderMarkdownToHtmlArgs = {
  content: Scalars['String']['input'];
  isMain: Scalars['Boolean']['input'];
};


export type QueryReviewableDraftArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  coediting?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  folderIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  groupIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  likerIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  query: Scalars['String']['input'];
  resources?: InputMaybe<ReadonlyArray<SearchResourceKind>>;
  sortBy?: InputMaybe<SearchSortKind>;
  updated?: InputMaybe<SearchDate>;
  userIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};


export type QuerySearchFolderArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QueryServiceNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySharedNoteArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySharedNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySummaryNoteHistoryArgs = {
  slackChannelId: Scalars['String']['input'];
  slackThreadTs: Scalars['String']['input'];
};


export type QuerySynonymGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTeamAccessTokenLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserFromAccountArgs = {
  account: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersFromAccountsArgs = {
  accounts: ReadonlyArray<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryValidateToMoveArgs = {
  folderIds: ReadonlyArray<Scalars['ID']['input']>;
  groupId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveFolderPinInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly folder?: InputMaybe<FolderInput>;
  readonly noteId: Scalars['ID']['input'];
};

export type RemoveFolderPinPayload = {
  readonly __typename?: 'RemoveFolderPinPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folder: Folder;
};

export type RemoveGroupPinInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
  readonly noteId: Scalars['ID']['input'];
};

export type RemoveGroupPinPayload = {
  readonly __typename?: 'RemoveGroupPinPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type RequestAttachmentConversionInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type RequestAttachmentConversionPayload = {
  readonly __typename?: 'RequestAttachmentConversionPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly conversionState: AttachmentFilePreviewConversionState;
};

export type RestoreFolderInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type RestoreFolderPayload = {
  readonly __typename?: 'RestoreFolderPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folder: Folder;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
};

export type RestoreGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
};

export type RestoreGroupPayload = {
  readonly __typename?: 'RestoreGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type RestoreNoteInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type RestoreNotePayload = {
  readonly __typename?: 'RestoreNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type ReviewableDraft = {
  readonly __typename?: 'ReviewableDraft';
  readonly comments: ReviewableDraftCommentConnection;
  readonly id: Scalars['ID']['output'];
  readonly isEnabled: Scalars['Boolean']['output'];
  readonly url: Scalars['String']['output'];
};


export type ReviewableDraftCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ReviewableDraftComment = Node & {
  readonly __typename?: 'ReviewableDraftComment';
  readonly anchor: Scalars['String']['output'];
  readonly author: User;
  readonly content: Scalars['String']['output'];
  readonly contentHtml: Scalars['String']['output'];
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly path: Scalars['String']['output'];
};

export type ReviewableDraftCommentConnection = {
  readonly __typename?: 'ReviewableDraftCommentConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<ReviewableDraftCommentEdge>>>;
  readonly nodes: ReadonlyArray<ReviewableDraftComment>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type ReviewableDraftCommentEdge = {
  readonly __typename?: 'ReviewableDraftCommentEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<ReviewableDraftComment>;
};

export type RevokeAccessTokenInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
};

export type RevokeAccessTokenPayload = {
  readonly __typename?: 'RevokeAccessTokenPayload';
  readonly accessToken: AccessToken;
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export enum Role {
  Admin = 'ADMIN',
  FullMember = 'FULL_MEMBER',
  Guest = 'GUEST',
  Owner = 'OWNER',
  ReadOnly = 'READ_ONLY'
}

export enum Saml2SsoMode {
  ModeDisabled = 'MODE_DISABLED',
  ModeMigration = 'MODE_MIGRATION',
  ModeSso = 'MODE_SSO'
}

export enum SearchDate {
  All = 'ALL',
  Within_1Month = 'WITHIN_1_MONTH',
  Within_1Week = 'WITHIN_1_WEEK',
  Within_1Year = 'WITHIN_1_YEAR',
  Within_3Days = 'WITHIN_3_DAYS',
  Within_6Months = 'WITHIN_6_MONTHS'
}

export type SearchFolderResult = {
  readonly __typename?: 'SearchFolderResult';
  readonly fixedPath: Scalars['String']['output'];
  readonly group: Group;
  readonly name: Scalars['String']['output'];
};

export type SearchFolderResultConnection = {
  readonly __typename?: 'SearchFolderResultConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<SearchFolderResultEdge>>>;
  readonly nodes: ReadonlyArray<SearchFolderResult>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type SearchFolderResultEdge = {
  readonly __typename?: 'SearchFolderResultEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<SearchFolderResult>;
};

export enum SearchResourceKind {
  Attachment = 'ATTACHMENT',
  Comment = 'COMMENT',
  Note = 'NOTE'
}

export type SearchResult = {
  readonly __typename?: 'SearchResult';
  readonly author: User;
  readonly contentSummaryHtml: Scalars['String']['output'];
  readonly contentUpdatedAt: Scalars['DateTime']['output'];
  readonly contributors: UserConnection;
  readonly document: SearchableDocument;
  readonly path: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly titleHtml: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type SearchResultContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContributorOrder>;
};

export type SearchResultConnection = {
  readonly __typename?: 'SearchResultConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<SearchResultEdge>>>;
  readonly nodes: ReadonlyArray<SearchResult>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type SearchResultEdge = {
  readonly __typename?: 'SearchResultEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<SearchResult>;
};

export enum SearchSortKind {
  Recent = 'RECENT',
  Relevant = 'RELEVANT'
}

export type SearchableDocument = Attachment | Comment | CommentReply | Note;

export type ServiceNotification = Node & {
  readonly __typename?: 'ServiceNotification';
  readonly id: Scalars['ID']['output'];
  readonly messageEn?: Maybe<Scalars['String']['output']>;
  readonly messageJa: Scalars['String']['output'];
  readonly notificationKind: ServiceNotificationKind;
  readonly read: Scalars['Boolean']['output'];
  readonly startAt: Scalars['DateTime']['output'];
  readonly titleEn?: Maybe<Scalars['String']['output']>;
  readonly titleJa: Scalars['String']['output'];
  readonly urlEn?: Maybe<Scalars['String']['output']>;
  readonly urlJa?: Maybe<Scalars['String']['output']>;
};

export type ServiceNotificationConnection = {
  readonly __typename?: 'ServiceNotificationConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<ServiceNotificationEdge>>>;
  readonly nodes: ReadonlyArray<ServiceNotification>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type ServiceNotificationEdge = {
  readonly __typename?: 'ServiceNotificationEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<ServiceNotification>;
};

export enum ServiceNotificationKind {
  Guide = 'GUIDE',
  Maintenance = 'MAINTENANCE',
  Marketing = 'MARKETING',
  NewFeature = 'NEW_FEATURE',
  Success = 'SUCCESS'
}

export type SetFeedToHomeInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly feed: FeedKindWithoutGroup;
};

export type SetFeedToHomePayload = {
  readonly __typename?: 'SetFeedToHomePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly feed: FeedKindWithoutGroup;
};

export type SetGroupToHomeInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
};

export type SetGroupToHomePayload = {
  readonly __typename?: 'SetGroupToHomePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type ShareNoteWithOutsideOfTeamInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly endAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly isEndAtEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  readonly isPasswordEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  readonly noteId: Scalars['ID']['input'];
  readonly password?: InputMaybe<Scalars['String']['input']>;
};

export type ShareNoteWithOutsideOfTeamPayload = {
  readonly __typename?: 'ShareNoteWithOutsideOfTeamPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type SharedNote = Node & {
  readonly __typename?: 'SharedNote';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly note: Note;
  readonly totalPageviews: Scalars['Int']['output'];
  readonly url: Scalars['String']['output'];
};

export type SharedNoteConnection = {
  readonly __typename?: 'SharedNoteConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<SharedNoteEdge>>>;
  readonly nodes: ReadonlyArray<SharedNote>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type SharedNoteEdge = {
  readonly __typename?: 'SharedNoteEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<SharedNote>;
};

export type SortGroupPinsInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
  readonly noteIds: ReadonlyArray<Scalars['ID']['input']>;
};

export type SortGroupPinsPayload = {
  readonly __typename?: 'SortGroupPinsPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly aiReviewUpdated?: Maybe<AiReviewUpdatedPayload>;
  readonly healthCheck?: Maybe<HealthCheckedPayload>;
};


export type SubscriptionAiReviewUpdatedArgs = {
  id: Scalars['String']['input'];
};

export type SummaryNoteHistory = Node & {
  readonly __typename?: 'SummaryNoteHistory';
  readonly id: Scalars['ID']['output'];
  readonly note: Note;
};

export type SyncUserLastUsedEditorInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly kind: UserLastUsedEditorKind;
};

export type SyncUserLastUsedEditorPayload = {
  readonly __typename?: 'SyncUserLastUsedEditorPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SynonymGroup = {
  readonly __typename?: 'SynonymGroup';
  readonly id: Scalars['ID']['output'];
  readonly lastAuthor: User;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly words: ReadonlyArray<Scalars['String']['output']>;
};

export type SynonymGroupConnection = {
  readonly __typename?: 'SynonymGroupConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<SynonymGroupEdge>>>;
  readonly nodes: ReadonlyArray<SynonymGroup>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type SynonymGroupEdge = {
  readonly __typename?: 'SynonymGroupEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<SynonymGroup>;
};

export type TransferGroupNotesInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly fromGroupId: Scalars['ID']['input'];
  readonly toGroupId: Scalars['ID']['input'];
};

export type TransferGroupNotesPayload = {
  readonly __typename?: 'TransferGroupNotesPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly from: Group;
  readonly to: Group;
};

export type UnlikeInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly likableId: Scalars['ID']['input'];
};

export type UnlikePayload = {
  readonly __typename?: 'UnlikePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly likers: UserConnection;
};


export type UnlikePayloadLikersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UnshareNoteWithOutsideOfTeamInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly noteId: Scalars['ID']['input'];
};

export type UnshareNoteWithOutsideOfTeamPayload = {
  readonly __typename?: 'UnshareNoteWithOutsideOfTeamPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type UnwatchNoteInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly noteId: Scalars['ID']['input'];
};

export type UnwatchNotePayload = {
  readonly __typename?: 'UnwatchNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateAccessTokenInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly id: Scalars['ID']['input'];
  readonly scopes: ReadonlyArray<AccessTokenScope>;
  readonly title: Scalars['String']['input'];
};

export type UpdateAccessTokenPayload = {
  readonly __typename?: 'UpdateAccessTokenPayload';
  readonly accessToken: AccessToken;
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateCommentInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly content: Scalars['String']['input'];
  readonly id: Scalars['ID']['input'];
  readonly touch?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCommentPayload = {
  readonly __typename?: 'UpdateCommentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly comment: Comment;
};

export type UpdateCommentReplyInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly content: Scalars['String']['input'];
  readonly id: Scalars['ID']['input'];
  readonly touch?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCommentReplyPayload = {
  readonly __typename?: 'UpdateCommentReplyPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly reply: CommentReply;
};

export type UpdateDashboardContentInput = {
  readonly baseContent: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupId: Scalars['ID']['input'];
  readonly newContent: Scalars['String']['input'];
  readonly seqNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateDashboardContentPayload = {
  readonly __typename?: 'UpdateDashboardContentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly dashboard: Dashboard;
};

export type UpdateDashboardInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly content: Scalars['String']['input'];
  readonly groupId: Scalars['ID']['input'];
  readonly seqNumber?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDashboardPayload = {
  readonly __typename?: 'UpdateDashboardPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly dashboard: Dashboard;
};

export type UpdateFolderNameInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly name: Scalars['String']['input'];
};

export type UpdateFolderNamePayload = {
  readonly __typename?: 'UpdateFolderNamePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folder: Folder;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
};

export type UpdateFolderParentInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly folderFullName?: InputMaybe<Scalars['String']['input']>;
  readonly folderId: Scalars['ID']['input'];
  readonly groupId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateFolderParentPayload = {
  readonly __typename?: 'UpdateFolderParentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly folder: Folder;
  /** @deprecated This is an internal feature. */
  readonly foldersCacheKey: Scalars['String']['output'];
};

export type UpdateGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly coverImageKey?: InputMaybe<Scalars['String']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGroupPayload = {
  readonly __typename?: 'UpdateGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly group: Group;
};

export type UpdateNoteContentInput = {
  readonly baseContent: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly newContent: Scalars['String']['input'];
  readonly touch?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateNoteContentPayload = {
  readonly __typename?: 'UpdateNoteContentPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type UpdateNoteGroupsInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly noteId: Scalars['ID']['input'];
};

export type UpdateNoteGroupsPayload = {
  readonly __typename?: 'UpdateNoteGroupsPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type UpdateNoteInput = {
  readonly baseNote: NoteInput;
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly contributors?: InputMaybe<ReadonlyArray<ContributorInput>>;
  readonly draft: Scalars['Boolean']['input'];
  readonly id: Scalars['ID']['input'];
  readonly newNote: NoteInput;
  readonly noteEditMemo?: InputMaybe<Scalars['String']['input']>;
  readonly noteTextSelections?: InputMaybe<ReadonlyArray<NoteTextSelectionInput>>;
};

export type UpdateNotePayload = {
  readonly __typename?: 'UpdateNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type UpdateNoteTemplateInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly coediting: Scalars['Boolean']['input'];
  readonly content: Scalars['String']['input'];
  readonly folders?: InputMaybe<ReadonlyArray<FolderInput>>;
  readonly groupIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly name: Scalars['String']['input'];
  readonly title: Scalars['String']['input'];
};

export type UpdateNoteTemplatePayload = {
  readonly __typename?: 'UpdateNoteTemplatePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly noteTemplate: NoteTemplate;
};

export type UpdateNoteTitleInput = {
  readonly baseTitle: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly newTitle: Scalars['String']['input'];
};

export type UpdateNoteTitlePayload = {
  readonly __typename?: 'UpdateNoteTitlePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type UpdateSaml2SsoSettingInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly mode: Saml2SsoMode;
  readonly readOnlyUserPasswordAuthnEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateSaml2SsoSettingPayload = {
  readonly __typename?: 'UpdateSaml2SsoSettingPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateSummaryNoteInput = {
  readonly authorEmail: Scalars['String']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly endContent?: InputMaybe<Scalars['String']['input']>;
  readonly newContent: Scalars['String']['input'];
  readonly preContent?: InputMaybe<Scalars['String']['input']>;
  readonly slackChannelId: Scalars['String']['input'];
  readonly slackThreadTs: Scalars['String']['input'];
};

export type UpdateSummaryNotePayload = {
  readonly __typename?: 'UpdateSummaryNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly note: Note;
};

export type UpdateSynonymGroupInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly words: ReadonlyArray<Scalars['String']['input']>;
};

export type UpdateSynonymGroupPayload = {
  readonly __typename?: 'UpdateSynonymGroupPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateTeamSettingInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly country?: InputMaybe<Scalars['String']['input']>;
  readonly departmentName?: InputMaybe<Scalars['String']['input']>;
  readonly inChargeUserId?: InputMaybe<Scalars['ID']['input']>;
  readonly mainPurposes?: InputMaybe<ReadonlyArray<MainPurpose>>;
  readonly organizationKind?: InputMaybe<OrganizationKind>;
  readonly organizationName?: InputMaybe<Scalars['String']['input']>;
  readonly phoneNumber?: InputMaybe<Scalars['String']['input']>;
  readonly postalCode?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamSettingPayload = {
  readonly __typename?: 'UpdateTeamSettingPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserNotificationSettingInput = {
  readonly checked: Scalars['Boolean']['input'];
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly kind: UserNotificationSettingKind;
};

export type UpdateUserNotificationSettingPayload = {
  readonly __typename?: 'UpdateUserNotificationSettingPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateUsersGroupsInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly groupIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly userIds: ReadonlyArray<Scalars['ID']['input']>;
};

export type UpdateUsersGroupsPayload = {
  readonly __typename?: 'UpdateUsersGroupsPayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
  readonly groups: GroupConnection;
  readonly users: UserConnection;
};


export type UpdateUsersGroupsPayloadGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UpdateUsersGroupsPayloadUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadAttachmentInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly data: Scalars['Blob']['input'];
  readonly kind: AttachmentKind;
  readonly name: Scalars['String']['input'];
};

export type UploadAttachmentPayload = {
  readonly __typename?: 'UploadAttachmentPayload';
  readonly attachment: Attachment;
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UploadAttachmentWithDataUrlInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly dataUrl: Scalars['String']['input'];
  readonly kind: AttachmentKind;
  readonly name: Scalars['String']['input'];
};

export type UploadAttachmentWithDataUrlPayload = {
  readonly __typename?: 'UploadAttachmentWithDataUrlPayload';
  readonly attachment: Attachment;
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type User = Node & {
  readonly __typename?: 'User';
  readonly account: Scalars['String']['output'];
  readonly avatarImage: UserAvatarImage;
  readonly biography?: Maybe<Scalars['String']['output']>;
  readonly coverImage?: Maybe<UserCoverImage>;
  readonly email: Scalars['String']['output'];
  readonly groups: GroupConnection;
  readonly id: Scalars['ID']['output'];
  readonly isOptOutCollabModeStartDialog: Scalars['Boolean']['output'];
  readonly latestNotes: NoteConnection;
  readonly locale: Scalars['String']['output'];
  readonly path?: Maybe<Scalars['String']['output']>;
  readonly popularNotes: NoteConnection;
  readonly privateNotes: NoteConnection;
  readonly realName: Scalars['String']['output'];
  readonly recentNotes: NoteConnection;
  readonly role: Role;
  readonly shortBio?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};


export type UserAvatarImageArgs = {
  density?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<UserAvatarImageSize>;
};


export type UserCoverImageArgs = {
  density?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<UserCoverImageSize>;
};


export type UserGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserLatestNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserPopularNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserPrivateNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserRecentNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAvatarImage = {
  readonly __typename?: 'UserAvatarImage';
  readonly density: Scalars['Int']['output'];
  readonly height: Scalars['Int']['output'];
  readonly url: Scalars['String']['output'];
  readonly width: Scalars['Int']['output'];
};

export enum UserAvatarImageSize {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type UserConnection = {
  readonly __typename?: 'UserConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<UserEdge>>>;
  readonly nodes: ReadonlyArray<User>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int']['output'];
};

export type UserCoverImage = {
  readonly __typename?: 'UserCoverImage';
  readonly density: Scalars['Int']['output'];
  readonly height: Scalars['Int']['output'];
  readonly key: Scalars['String']['output'];
  readonly size: UserCoverImageSize;
  readonly url: Scalars['String']['output'];
  readonly width: Scalars['Int']['output'];
};

export enum UserCoverImageSize {
  Medium = 'MEDIUM',
  Original = 'ORIGINAL',
  Small = 'SMALL'
}

export type UserEdge = {
  readonly __typename?: 'UserEdge';
  readonly cursor: Scalars['String']['output'];
  readonly node?: Maybe<User>;
};

export enum UserLastUsedEditorKind {
  MarkdownEditor = 'MARKDOWN_EDITOR',
  RichTextEditor = 'RICH_TEXT_EDITOR'
}

export enum UserNotificationSettingKind {
  NewsletterMail = 'NEWSLETTER_MAIL',
  ServiceNotificationWeb = 'SERVICE_NOTIFICATION_WEB'
}

export type WatchNoteInput = {
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>;
  readonly noteId: Scalars['ID']['input'];
  readonly watchedAction: WatchState;
};

export type WatchNotePayload = {
  readonly __typename?: 'WatchNotePayload';
  readonly clientMutationId?: Maybe<Scalars['String']['output']>;
};

export enum WatchState {
  WatchComment = 'WATCH_COMMENT',
  WatchNoteUpdate = 'WATCH_NOTE_UPDATE'
}

export type GetAllPostsQueryVariables = Exact<{
  folderPath: Scalars['String']['input'];
}>;


export type GetAllPostsQuery = { readonly __typename?: 'Query', readonly folderFromPath: { readonly __typename?: 'Folder', readonly id: string, readonly name: string, readonly notes: { readonly __typename?: 'NoteConnection', readonly totalCount: number, readonly edges?: ReadonlyArray<{ readonly __typename?: 'NoteEdge', readonly node?: { readonly __typename?: 'Note', readonly id: string, readonly title: string, readonly createdAt: any } | null } | null> | null } } };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPostQuery = { readonly __typename?: 'Query', readonly note: { readonly __typename?: 'Note', readonly id: string, readonly title: string, readonly createdAt: any, readonly content: string } };
