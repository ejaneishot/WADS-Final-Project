/**
 * OpenAPI path definitions for routes without inline @swagger blocks.
 * Scanned by swagger-jsdoc via src/lib/swagger.ts. The empty export makes this
 * a module so JSDoc comments are retained; swagger-jsdoc reads comments only.
 */

/**
 * @swagger
 * /api/careers/count:
 *   get:
 *     summary: Get total career count
 *     description: Public endpoint used on the marketing homepage.
 *     tags:
 *       - Careers
 *     responses:
 *       200:
 *         description: Career row count
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 12
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile
 *     tags:
 *       - Users
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Profile with skills
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *   put:
 *     summary: Update user profile
 *     tags:
 *       - Users
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 nullable: true
 *               major:
 *                 type: string
 *                 nullable: true
 *               semester:
 *                 type: integer
 *                 nullable: true
 *               gpaRange:
 *                 type: string
 *                 nullable: true
 *               interests:
 *                 type: array
 *                 items:
 *                   type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     level:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Profile saved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OkResponse'
 *       400:
 *         description: Validation failed
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /api/roadmaps:
 *   post:
 *     summary: Create a roadmap
 *     tags:
 *       - Roadmaps
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Backend Developer Path
 *     responses:
 *       200:
 *         description: Created roadmap
 *       400:
 *         description: Missing title
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *   patch:
 *     summary: Rename a roadmap
 *     tags:
 *       - Roadmaps
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - title
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated roadmap
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         description: Roadmap not found
 *   delete:
 *     summary: Delete a roadmap and its nodes
 *     tags:
 *       - Roadmaps
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Roadmap deleted
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         description: Roadmap not found
 */

/**
 * @swagger
 * /api/roadmaps/{id}/nodes:
 *   post:
 *     summary: Add a node to a roadmap
 *     tags:
 *       - Roadmaps
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               parentIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Node created
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         description: Roadmap not found
 */

/**
 * @swagger
 * /api/roadmaps/{id}/generate:
 *   post:
 *     summary: Generate roadmap content with AI (tech career topics only)
 *     tags:
 *       - Roadmaps
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - topic
 *             properties:
 *               topic:
 *                 type: string
 *                 example: Kubernetes for beginners
 *               includeProfile:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       200:
 *         description: Nodes generated
 *       400:
 *         description: Invalid body or topic not related to tech career learning
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /api/nodes/{nodeId}:
 *   patch:
 *     summary: Update a roadmap node
 *     tags:
 *       - Roadmaps
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: nodeId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Node updated
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         description: Node not found
 *   delete:
 *     summary: Delete a roadmap node
 *     tags:
 *       - Roadmaps
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: nodeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Node deleted
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         description: Node not found
 */

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Extract text from a PDF resume
 *     tags:
 *       - Resume
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Extracted plain text
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 text:
 *                   type: string
 *       400:
 *         description: Missing or invalid file
 */

/**
 * @swagger
 * /api/analyze:
 *   post:
 *     summary: Analyze resume text with Gemini (resume or draft only)
 *     description: Requires GEMINI_API_KEY on the server. Rejects non-resume pasted text.
 *     tags:
 *       - Resume
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Analysis result
 *       400:
 *         description: Missing text or input is not resume or resume-draft content
 *       503:
 *         description: AI not configured
 */

/**
 * @swagger
 * /api/admin/overview:
 *   get:
 *     summary: Admin dashboard stats
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Aggregate counts
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/admin/careers:
 *   get:
 *     summary: List all careers (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Career list
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *   post:
 *     summary: Create a career (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - industry
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               industry:
 *                 type: string
 *               description:
 *                 type: string
 *               tag:
 *                 type: string
 *               slug:
 *                 type: string
 *               milestones:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Career created
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/admin/careers/{careerId}:
 *   patch:
 *     summary: Update a career (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: careerId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *   delete:
 *     summary: Delete a career (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: careerId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/admin/assessment:
 *   get:
 *     summary: Get assessment editor payload
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Sections and scoring tags
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/admin/assessment/questions:
 *   post:
 *     summary: Create an assessment question (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Question created
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/admin/assessment/questions/{questionId}:
 *   patch:
 *     summary: Update a question (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *   delete:
 *     summary: Delete a question (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/admin/assessment/questions/{questionId}/options:
 *   post:
 *     summary: Add an option to a question (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Option created
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/admin/assessment/options/{optionId}:
 *   patch:
 *     summary: Update an assessment option (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: optionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *   delete:
 *     summary: Delete an assessment option (admin)
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: optionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/** Placeholder export so TypeScript treats this file as a module. */
export {};
